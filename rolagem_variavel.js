// Função para carregar CSV
async function loadCSV() {
  const response = await fetch('rolling_text.csv'); // caminho do CSV
  const text = await response.text();
  return text;
}

async function initScroll() {
  const text = await loadCSV();
  const scrollText = document.getElementById('scroll-text');
  const container = document.getElementById('scroll-container');

  // Duplicando o texto para efeito contínuo
  scrollText.textContent = text + "\n" + text;

  const textHeight = scrollText.offsetHeight;
  let pos = 0;
  let animationId = null;
  let playing = false;

  // AUDIO + ANALISER
  const audio = document.getElementById('audio');
  if (!audio) return console.warn("Elemento <audio id='audio'> não encontrado!");

  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  const source = audioCtx.createMediaElementSource(audio);
  const analyser = audioCtx.createAnalyser();
  analyser.fftSize = 256;
  source.connect(analyser);
  analyser.connect(audioCtx.destination);
  const dataArray = new Uint8Array(analyser.frequencyBinCount);

  function getRMS() {
    analyser.getByteFrequencyData(dataArray);
    let sum = 0;
    for (let i = 0; i < dataArray.length; i++) sum += dataArray[i] ** 2;
    return Math.sqrt(sum / dataArray.length) / 255; // 0..1
  }

  // Função de animação
  function animate() {
    if (!playing) return;

    // velocidade baseada na intensidade do áudio
    const rms = getRMS();
    //let speed = rms * 20;      // ajuste: quanto maior, mais rápido
    //if (speed < 4) speed = rms * 2 ; // silêncio quase parado
    
    const baseSpeed = 1; // velocidade mínima
    const factor = 100;     // multiplicador máximo
    const exponent = 2;    // quanto maior, mais "sensível" aos picos
    let speed = baseSpeed + factor * Math.pow(rms, exponent);
    pos -= speed;
    if (pos <= -textHeight / 2) pos = 0;
    scrollText.style.transform = `translateY(${pos}px)`;

    animationId = requestAnimationFrame(animate);
  }

  // Eventos do áudio
  audio.addEventListener('play', async () => {
    playing = true;
    if (audioCtx.state === 'suspended') await audioCtx.resume();
    cancelAnimationFrame(animationId);
    animate();
  });

  audio.addEventListener('pause', () => {
    playing = false;
    cancelAnimationFrame(animationId);
  });

  audio.addEventListener('ended', () => {
    playing = false;
    cancelAnimationFrame(animationId);
    pos = 0;
    scrollText.style.transform = 'translateY(0)';
  });
}

initScroll();