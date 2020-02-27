const hamburger = document.querySelector('.js-nav-toggle');
const header = document.querySelector('.js-header');

export default () => {
  hamburger.addEventListener('click', e => {
    if (hamburger.getAttribute('aria-checked') === 'false') {
      hamburger.classList.add('is-active');
      hamburger.setAttribute('aria-checked', 'true');
      header.classList.add('full-screen');
    } else {
      hamburger.classList.remove('is-active');
      hamburger.setAttribute('aria-checked', 'false');
      header.classList.remove('full-screen');
    }
  });
};
