
// ____________________________ MAP CONFIG ____________________________
mapboxgl.accessToken = 'pk.eyJ1Ijoic2FyYWxnYyIsImEiOiJja2NjbTAyczkwNXA3Mnlscm5nbjN5OHZiIn0.yNcJkPBSugRlIeGkXDRlZw';

let zoom_intro, center_intro;
const aspectRatio = window.innerWidth / window.innerHeight;
if (aspectRatio > 2) { zoom_intro = 2.8; center_intro = [-82.67, -18.86]; }
else {
  if (window.innerWidth < 1024) { 
    zoom_intro = 2.8; center_intro = [-82.67, -18.86]; 
  }
  else if (window.innerWidth < 1400) { 
    zoom_intro = 2.8; center_intro = [-82.67, -18.86]; 
  }
  else if (window.innerWidth < 1600) {
    zoom_intro = 3.2; center_intro = [-82.67, -18.86]; 
  }
  else { 
    zoom_intro = 3.1; center_intro = [-82.67, -18.86];
  }
}

const isMobile = window.matchMedia("(max-width: 1024px)").matches;
let bearing_intro = isMobile ? 0 : 90;

const map = new mapboxgl.Map({
  container: 'map_zoomout',
  style: 'mapbox://styles/saralgc/cmfqzh15g00ik01s6a0k69cyg',
  center: center_intro,
  zoom: zoom_intro,
  bearing: bearing_intro,
  interactive: true
});

// ____________________________ PARSE SRT ____________________________
function parseSRT(data) {
  const pattern = /(\d+)\s+(\d{2}:\d{2}:\d{2},\d{3}) --> (\d{2}:\d{2}:\d{2},\d{3})\s+([\s\S]*?)(?=\n{2,}|$)/g;
  const result = [];
  let match;
  while ((match = pattern.exec(data)) !== null) {
    const start = toSeconds(match[2]);
    const end = toSeconds(match[3]);
    result.push({ start, end, text: match[4].replace(/\n/g, ' ') });
  }
  return result;
}

function toSeconds(ts) {
  const [h, m, s] = ts.replace(',', ':').split(':').map(parseFloat);
  return h * 3600 + m * 60 + s;
}

// ____________________________ MAIN LOGIC ____________________________
$(document).ready(() => {
  $.ajax({
    type: "GET",
    url: "../random_coordinates.csv",
    dataType: "text",
    success: csvData => makeGeoJSON(csvData)
  });

  function makeGeoJSON(csvData) {
    csv2geojson.csv2geojson(csvData, { latfield: "latitude", lonfield: "longitude", delimiter: "," },
      (err, data) => {
        if (err) return console.error(err);

        map.on("load", async () => {
          // Add IDs
          data.features.forEach((f, i) => {
            f.id = i;
            f.timestampIndex = i;
          });

          // Add Layer
          map.addLayer({
            id: "csvData",
            type: "circle",
            source: { type: "geojson", data: data },
            paint: {
              "circle-radius": [
                "case",
                ["boolean", ["feature-state", "active"], false],
                ["coalesce", ["feature-state", "radius"], 20],
                5
              ],
              "circle-color": "#ff69b4",
              "circle-stroke-color": "#fff",
              "circle-stroke-width": 1,
              "circle-opacity": 1
            }
          });

            // ---------- POPUP AO CLICAR ----------
            map.on('click', 'csvData', function (e) {
                const coordinates = e.features[0].geometry.coordinates.slice();
                const imageName = e.features[0].properties.image || '1'; // fallback if can't find
                const description = `<img src="../assets/${imageName}.png" style="max-width:200px; max-height:200px;">`;
                while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
                }
                new mapboxgl.Popup()
                .setLngLat(coordinates)
                .setHTML(description)
                .addTo(map);
            });

          // Load subtitles
          const srtText = await fetch("es.srt").then(r => r.text());
          const srtData = parseSRT(srtText);

          // Audio + RMS Setup
          const audio = document.getElementById("audio");
          const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
          const src = audioCtx.createMediaElementSource(audio);
          const analyser = audioCtx.createAnalyser();
          analyser.fftSize = 256;
          src.connect(analyser);
          analyser.connect(audioCtx.destination);

          const dataArray = new Uint8Array(analyser.frequencyBinCount);
          let smoothedRMS = 0;
          const smoothing = 0.85;
          const baseRadius = 5;
          const maxRadius = 50;
          let rafId = null;

          function getRMS() {
            analyser.getByteTimeDomainData(dataArray);
            let sum = 0;
            for (let i = 0; i < dataArray.length; i++) {
              const v = (dataArray[i] - 128) / 128;
              sum += v * v;
            }
            return Math.sqrt(sum / dataArray.length);
          }

          function updateMarkers() {
            const t = audio.currentTime;
            const rms = getRMS();
            smoothedRMS = smoothedRMS * smoothing + rms * (1 - smoothing);
            
            data.features.forEach(f => {
              const s = srtData[f.timestampIndex];
              if (!s) return;

              const active = t >= s.start && t <= s.end;
              const radius = active
                ? baseRadius + smoothedRMS * (maxRadius - baseRadius)
                : baseRadius;

              map.setFeatureState({ source: "csvData", id: f.id }, { active, radius });
            });

            rafId = requestAnimationFrame(updateMarkers);
          }

          audio.addEventListener("play", async () => {
            if (audioCtx.state === "suspended") await audioCtx.resume();
            rafId = requestAnimationFrame(updateMarkers);
          });

          audio.addEventListener("pause", () => {
            cancelAnimationFrame(rafId);
          });

          audio.addEventListener("ended", () => {
            cancelAnimationFrame(rafId);
            smoothedRMS = 0;
            data.features.forEach(f => {
              map.setFeatureState({ source: "csvData", id: f.id }, { active: false, radius: baseRadius });
            });
          });

        });
      });
  }
});