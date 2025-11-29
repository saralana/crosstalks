  // Função para carregar CSV
  async function loadCSV() {
    const response = await fetch('csv.csv'); // caminho do CSV
    const text = await response.text();
    return text;
  }

  async function init() {
    const text = await loadCSV();
    const scrollText = document.getElementById('scroll-text');

    // Duplicando o texto para rolagem contínua
    scrollText.textContent = text + "\n" + text;

    const containerHeight = document.getElementById('scroll-container').offsetHeight;
    const textHeight = scrollText.offsetHeight;

    let pos = 0; // posição inicial

    function animate() {
      pos -= 3; // velocidade, 1px por frame (ajuste para ficar mais rápido)
      if (pos <= -textHeight / 2) pos = 0; // reinicia quando metade do texto já passou
      scrollText.style.transform = `translateY(${pos}px)`;
      requestAnimationFrame(animate);
    }

    animate();
  }

  init();