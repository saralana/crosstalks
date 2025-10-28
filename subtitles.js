// carregar e processar um arquivo .srt (substitua o caminho abaixo)
fetch('en.srt')
  .then(r => r.text())
  .then(parseSRT)
  .then(subs => {
    window.subtitles = subs;
  });

const subtitleEl = document.getElementById('subtitle');

function parseSRT(data) {
  const pattern = /(\d+)\s+(\d{2}:\d{2}:\d{2},\d{3}) --> (\d{2}:\d{2}:\d{2},\d{3})\s+([\s\S]*?)(?=\n{2,}|$)/g;
  const result = [];
  let match;
  while ((match = pattern.exec(data)) !== null) {
    const start = toSeconds(match[2]);
    const end = toSeconds(match[3]);
    const text = match[4].trim();
    result.push({ start, end, text });
  }
  return result;
}

function toSeconds(t) {
  const [h, m, s] = t.replace(',', ':').split(':').map(parseFloat);
  return h * 3600 + m * 60 + s;
}

// Atualiza legenda conforme o áudio toca
audio.addEventListener('timeupdate', () => {
  if (!window.subtitles) return;
  const current = audio.currentTime;
  const sub = window.subtitles.find(s => current >= s.start && current <= s.end);
  subtitleEl.textContent = sub ? sub.text : '';
});
