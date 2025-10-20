const currLang = document.querySelector('.lang');
const langList = document.querySelector('.lang-list');

currLang.addEventListener('click', event => {
  openLangSelector();
});

function openLangSelector() {
  langList.classList.add('is-opened');

  langList.addEventListener('click', onLangChange);
  document.addEventListener('click', onOutOfLangClick);
}

function closeLangSelector() {
  langList.classList.remove('is-opened');

  langList.removeEventListener('click', onLangChange);
  document.removeEventListener('click', onOutOfLangClick);
}

function onLangChange(event) {
  if (event.target.nodeName !== 'LI' && event.target.nodeName !== 'IMG') return;

  const newLang = event.target.closest('.lang-item');
  currLang.innerHTML = newLang.innerHTML;
  langList.childNodes.forEach(langItem => {
    if (langItem.nodeName !== 'LI') return;
    if (langItem === newLang) langItem.classList.add('current');
    else {
      langItem.classList.remove('current');
    }
  });

  closeLangSelector();
}

function onOutOfLangClick(event) {
  if (event.target.closest('.lang-selector')) return;
  closeLangSelector();
}
