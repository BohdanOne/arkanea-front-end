const navbar = document.querySelector('.js-header');

export default () => {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      navbar.classList.add('is-scrolled');
    } else {
      navbar.classList.remove('is-scrolled');
    }
  });
};
