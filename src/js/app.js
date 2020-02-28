import isScrolled from './modules/isScrolled';
import navigationToggle from './modules/navToggle';
import scrollToTop from './modules/scrollToTop';
import initializeSlider from './modules/slider';
import { validateQuoteForm, validateContactForm } from './modules/validate';

window.addEventListener('load', () => {
  isScrolled();
  navigationToggle();
  initializeSlider();
  scrollToTop();
  validateQuoteForm();
  validateContactForm();
});
