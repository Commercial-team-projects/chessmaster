'use strict';
const faq = [
  {
    id: 1,
    question: `Як відбувається заняття?`,
    answer: `Заняття проходить через конференцію в Zoom або Google meet за попередньо узгодненим графіком.
Працюємо на безкоштовній онлайн платформі <a class="faq-answer-link" href="https://lichess.org/" target="_blank">Lichess.org</a>.`,
  },
  {
    id: 2,
    question: `Чи потрібна шахова дошка ?`,
    answer: `Заняття проходить через конференцію в Zoom або Google meet за попередньо узгодненим графіком.
Працюємо на безкоштовній онлайн платформі <a href="https://lichess.org/" target="_blank">Lichess.org</a>.`,
  },
  {
    id: 3,
    question: `З якого віку можна починати заняття шахами?`,
    answer: `Заняття проходить через конференцію в Zoom або Google meet за попередньо узгодненим графіком.
Працюємо на безкоштовній онлайн платформі <a href="https://lichess.org/" target="_blank">Lichess.org</a>.`,
  },
  {
    id: 4,
    question: `Скільки часу триває урок?`,
    answer: `Заняття проходить через конференцію в Zoom або Google meet за попередньо узгодненим графіком.
Працюємо на безкоштовній онлайн платформі <a href="https://lichess.org/" target="_blank">Lichess.org</a>.`,
  },
  {
    id: 5,
    question: `Чи підходять заняття з шахів дівчатам?`,
    answer: `Заняття проходить через конференцію в Zoom або Google meet за попередньо узгодненим графіком.
Працюємо на безкоштовній онлайн платформі <a href="https://lichess.org/" target="_blank">Lichess.org</a>.`,
  },
  {
    id: 6,
    question: `Скільки часу потрібно щоб відчути перші результати?`,
    answer: `Заняття проходить через конференцію в Zoom або Google meet за попередньо узгодненим графіком.
Працюємо на безкоштовній онлайн платформі <a href="https://lichess.org/" target="_blank">Lichess.org</a>.`,
  },
  {
    id: 7,
    question: `Чи можна паралельно відвідувати шаховий клуб офлайн?`,
    answer: `Заняття проходить через конференцію в Zoom або Google meet за попередньо узгодненим графіком.
Працюємо на безкоштовній онлайн платформі <a href="https://lichess.org/" target="_blank">Lichess.org</a>.`,
  },
  {
    id: 8,
    question: `Чи важлива різниця в часі?`,
    answer: `Заняття проходить через конференцію в Zoom або Google meet за попередньо узгодненим графіком.
Працюємо на безкоштовній онлайн платформі <a href="https://lichess.org/" target="_blank">Lichess.org</a>.`,
  },
  {
    id: 9,
    question: `Яким чином відбувається оплата за урок?`,
    answer: `Заняття проходить через конференцію в Zoom або Google meet за попередньо узгодненим графіком.
Працюємо на безкоштовній онлайн платформі <a href="https://lichess.org/" target="_blank">Lichess.org</a>.`,
  },
  {
    id: 10,
    question: `Чи можна відмінити або перенести заняття без втрати коштів?`,
    answer: `Заняття проходить через конференцію в Zoom або Google meet за попередньо узгодненим графіком.
Працюємо на безкоштовній онлайн платформі <a href="https://lichess.org/" target="_blank">Lichess.org</a>.`,
  },
];

const res = faq.map((item, index) => {
  const checkedAttr = index === 0 ? 'checked' : '';
  return `<li class="faq-list-item"><input class="faq-list-btn" type="radio" name="question" id="question-${item.id}" ${checkedAttr}><label class="faq-list-question" for="question-${item.id}">${item.id}. ${item.question}</label><p class="faq-list-answer">${item.answer}</p></li>`;
});
document.querySelector('.faq-list').innerHTML = res.join('');
