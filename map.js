
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
  // Carrega o arquivo JSON
  $.getJSON("../data.json", jsonData => {
    makeGeoJSON(jsonData);
  });

  function makeGeoJSON(jsonData) {
    // Converte markers em um objeto GeoJSON
    const geojson = {
      type: "FeatureCollection",
      features: jsonData.markers.map((m, i) => ({
        type: "Feature",
        id: i,
        geometry: {
          type: "Point",
          coordinates: m.coords
        },
        properties: {
          image: m.images[0] || "1",
          timestamps: m.timestamps
        },
        timestampIndex: i
      }))
    };

    map.on("load", async () => {
      // Adiciona a layer ao mapa
      map.addLayer({
        id: "jsonData",
        type: "circle",
        source: { type: "geojson", data: geojson },
        paint: {
          "circle-radius": [
            "case",
            ["boolean", ["feature-state", "active"], false],
            ["coalesce", ["feature-state", "radius"], 20],
            7 ],
          "circle-color": [
                "case",
                ["boolean", ["feature-state", "activePopup"], false],
                "#000000",          // preto quando popup ativo
                "#ff69b4"           // cor padrão
          ],
          "circle-stroke-color": "#fff",
          "circle-stroke-width": 1.5,
          "circle-opacity": 1
        }
      });

      map.on("mouseenter", "jsonData", () => {
        map.getCanvas().style.cursor = "pointer";
      });
      map.on("mouseleave", "jsonData", () => {
        map.getCanvas().style.cursor = "";
      });

// ---------- POPUP AO CLICAR ----------
    map.on('click', 'jsonData', function (e) {
  e.originalEvent.stopPropagation(); // evita fechamento imediato

  const feature = e.features?.[0];
  if (!feature) return;

  const featureId = feature.id;
  const markerData = jsonData.markers[feature.id];
  if (!markerData) return;

  // Verifica se já existe um popup aberto para esse marker
  const existingPopup = document.querySelector(`.custom-popup[data-marker-id="${featureId}"]`);

  // 🔹 Se já existe → fecha e reseta estado visual
  if (existingPopup) {
    existingPopup.remove();
    map.setFeatureState({ source: 'jsonData', id: featureId }, { activePopup: false });
    return;
  }

  // 🔹 Caso contrário → abre um novo popup

  const images = markerData.images || [];

  // Marca o marker como ativo (cor preta)
  map.setFeatureState({ source: 'jsonData', id: featureId }, { activePopup: true });

  // Cria container do popup
  const popup = document.createElement('div');
  popup.className = 'custom-popup';
  popup.dataset.markerId = featureId; // 🔹 associa popup ao marker
  popup.innerHTML = `
    <button class="close-btn">✖</button>
    <div class="popup-gallery">
      ${images.map(img =>
        `<img class="popup-image" src="../assets/${img}.png" alt="${img}">`
      ).join('')}
    </div>
  `;

  document.body.appendChild(popup);

  // Posição aleatória entre 5vh e 20vh das bordas
  const minOffsetVH = 5;
  const maxOffsetVH = 20;
  const edge = Math.floor(Math.random() * 4);
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const popupWidth = 300;
  const popupHeight = 200;
  const vhToPx = (vhValue) => (vhValue / 100) * vh;

  let top = 0, left = 0;
  switch (edge) {
    case 0:
      top = vhToPx(Math.random() * (maxOffsetVH - minOffsetVH) + minOffsetVH);
      left = Math.random() * (vw - popupWidth);
      break;
    case 1:
      top = vh - popupHeight - vhToPx(Math.random() * (maxOffsetVH - minOffsetVH) + minOffsetVH);
      left = Math.random() * (vw - popupWidth);
      break;
    case 2:
      top = Math.random() * (vh - popupHeight);
      left = vhToPx(Math.random() * (maxOffsetVH - minOffsetVH) + minOffsetVH);
      break;
    case 3:
      top = Math.random() * (vh - popupHeight);
      left = vw - popupWidth - vhToPx(Math.random() * (maxOffsetVH - minOffsetVH) + minOffsetVH);
      break;
  }

  popup.style.top = `${top}px`;
  popup.style.left = `${left}px`;
  popup.classList.add('show');

  // Fecha ao clicar no botão ✖
  popup.querySelector('.close-btn').addEventListener('click', (ev) => {
    ev.stopPropagation();
    popup.remove();
    map.setFeatureState({ source: 'jsonData', id: featureId }, { activePopup: false });
  });

  // Impede cliques dentro do popup de propagarem
  popup.addEventListener('click', (ev) => ev.stopPropagation());
});

      // ---------- CARREGA LEGENDAS ----------
      const srtText = await fetch("time.srt").then(r => r.text());
      const srtData = parseSRT(srtText);

      // ---------- ÁUDIO + ANIMAÇÃO ----------
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
      const maxRadius = 60;
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

        geojson.features.forEach(f => {
          const s = srtData[f.timestampIndex];
          if (!s) return;

          const active = t >= s.start && t <= s.end;
          const radius = active
            ? baseRadius + smoothedRMS * (maxRadius - baseRadius)
            : baseRadius;

          map.setFeatureState({ source: "jsonData", id: f.id }, { active, radius });
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
        geojson.features.forEach(f => {
          map.setFeatureState({ source: "jsonData", id: f.id }, { active: false, radius: baseRadius });
        });
      });
    });
  }
});
