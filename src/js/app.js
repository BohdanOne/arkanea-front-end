import initializeSlider from './modules/slider';
import { isScrolled } from './modules/navbar';
import scrollToTop from './modules/scrollToTop';
import { validateQuoteForm, validateContactForm } from './modules/validate';

window.addEventListener('load', () => {
  initializeSlider();
  scrollToTop();
  window.addEventListener('scroll', isScrolled);
  validateQuoteForm();
  validateContactForm();
});
