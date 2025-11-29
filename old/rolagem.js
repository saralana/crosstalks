
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

  // Função de animação
  function animate() {
    if (!playing) return; // só rola se estiver tocando
    pos -= 1.5; // velocidade da rolagem
    if (pos <= -textHeight / 2) pos = 0;
    scrollText.style.transform = `translateY(${pos}px)`;
    animationId = requestAnimationFrame(animate);
  }

  // Controla com o áudio
  const audio = document.getElementById('audio');
  if (!audio) return console.warn("Elemento <audio id='audio'> não encontrado!");

  audio.addEventListener('play', () => {
    playing = true;
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
