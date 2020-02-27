const navbar = document.querySelector('.js-header');

export default () => {
  if (window.scrollY > 200) {
    navbar.classList.add('is-scrolled');
  } else {
    navbar.classList.remove('is-scrolled');
  }
};