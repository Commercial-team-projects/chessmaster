import Typed from 'typed.js';

// 1. Знаходимо всі параграфи з цим класом
const paragraphs = document.querySelectorAll('.level-item-text');

// 2. Проходимося по кожному й запускаємо Typed окремо
paragraphs.forEach(p => {
  const text = p.textContent.trim(); // беремо текст з цього <p>

  new Typed(p, {
    // <-- сюди передаємо p, а не paragraphElement
    strings: [text],
    typeSpeed: 50,
    backSpeed: 0,
    showCursor: false,
  });
});
