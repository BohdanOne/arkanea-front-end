const hamburger = document.querySelector('.js-nav-toggle');
const header = document.querySelector('.js-header');

export default () => {
  hamburger.addEventListener('click', e => {
    hamburger.getAttribute('aria-checked') === 'false'
      ? openHamburgerMenu()
      : closeHamburgerMenu();
  });
};

const openHamburgerMenu = () => {
  hamburger.classList.add('is-active');
  hamburger.setAttribute('aria-checked', 'true');
  header.classList.add('is-expanded');
}

const closeHamburgerMenu = () => {
  hamburger.classList.remove('is-active');
  hamburger.setAttribute('aria-checked', 'false');
  header.classList.remove('is-expanded');
}
