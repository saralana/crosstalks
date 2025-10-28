// === player.js ===
// Baseado no seu código original
// Mantém análise de volume (intensidade) em tempo real
// + integra com novo pulses.js e data.json via map.js

// -----------------------------------------------------------
// Variáveis principais
// -----------------------------------------------------------
const audio = document.getElementById('audio');
const subtitleEl = document.getElementById('subtitle');

let audioCtx, sourceNode, analyser, dataArray;
let currentPulseIndex = null;
let animationFrameId = null;

// -----------------------------------------------------------
// 1. Inicializa o analisador de áudio
// -----------------------------------------------------------
function setupAudioAnalyser() {
  if (audioCtx) return; // já inicializado

  audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  sourceNode = audioCtx.createMediaElementSource(audio);

  analyser = audioCtx.createAnalyser();
  analyser.fftSize = 256;

  const bufferLength = analyser.frequencyBinCount;
  dataArray = new Uint8Array(bufferLength);

  sourceNode.connect(analyser);
  analyser.connect(audioCtx.destination);
}

// -----------------------------------------------------------
// 2. Calcula intensidade média (volume do áudio em tempo real)
// -----------------------------------------------------------
function getAudioLevel() {
  analyser.getByteFrequencyData(dataArray);
  let sum = 0;
  for (let i = 0; i < dataArray.length; i++) {
    sum += dataArray[i];
  }
  const avg = sum / dataArray.length;
  return avg / 255; // normaliza para [0, 1]
}

// -----------------------------------------------------------
// 3. Atualiza legenda em tempo real (subtitles.js)
// -----------------------------------------------------------
function updateSubtitle(currentTime) {
  if (!window.subtitles) return;
  const sub = window.subtitles.find(
    (s) => currentTime >= s.start && currentTime <= s.end
  );
  subtitleEl.textContent = sub ? sub.text : '';
}

// -----------------------------------------------------------
// 4. Atualiza markers com base nos pulsos (pulses.js)
// -----------------------------------------------------------
function updatePulseMarkers(currentTime) {
  if (!window.pulses) return;
  const pulse = window.pulses.find(
    (p) => currentTime >= p.start && currentTime < p.end
  );
  if (!pulse) return;

  const pulseIndex = window.pulses.indexOf(pulse) + 1;
  if (pulseIndex !== currentPulseIndex) {
    currentPulseIndex = pulseIndex;
    if (window.highlightMarkersForPulse) {
      window.highlightMarkersForPulse(pulseIndex);
    }
  }
}

// -----------------------------------------------------------
// 5. Loop principal (animação / tempo real)
// -----------------------------------------------------------
function animate() {
  if (!analyser) return;
  const currentTime = audio.currentTime;

  // intensidade sonora (volume instantâneo)
  const level = getAudioLevel();

  // pulsação contínua dos markers conforme volume
  if (window.updateMarkersIntensity) {
    window.updateMarkersIntensity(level);
  }

  // eventos discretos de pulso (de pulses.js)
  updatePulseMarkers(currentTime);

  // legenda sincronizada (de subtitles.js)
  updateSubtitle(currentTime);

  animationFrameId = requestAnimationFrame(animate);
}

// -----------------------------------------------------------
// 6. Eventos do player
// -----------------------------------------------------------
audio.addEventListener('play', () => {
  setupAudioAnalyser();
  audioCtx.resume();
  animate();
});

audio.addEventListener('pause', () => {
  cancelAnimationFrame(animationFrameId);
});

audio.addEventListener('ended', () => {
  cancelAnimationFrame(animationFrameId);
  subtitleEl.textContent = '';
  if (window.highlightMarkersForPulse) {
    window.highlightMarkersForPulse(-1); // desativa tudo
  }
});

// -----------------------------------------------------------
// 7. Inicialização geral
// -----------------------------------------------------------
window.addEventListener('DOMContentLoaded', () => {
  console.log('Player pronto e aguardando play()...');
});
