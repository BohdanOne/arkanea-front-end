import initializeSlider from './modules/slider';
import { isScrolled } from './modules/navbar';
import scrollToTop from './modules/scrollToTop';

window.addEventListener('load', () => {
  initializeSlider();
  scrollToTop();
  window.addEventListener('scroll', isScrolled);
});
