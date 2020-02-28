export const validateQuoteForm = () => {
  const quoteForm = document.querySelector('.js-form--quote');
  const email = quoteForm.querySelector('input');

  quoteForm.addEventListener('submit', e => {
    e.preventDefault();

    test(email, 'Please enter valid email!');
  });
};

export const validateContactForm = () => {
  const contactForm = document.querySelector('.js-form--contact');
  const name = contactForm.querySelector('input[type="text"]');
  const email = contactForm.querySelector('input[type="email"]');
  const message = contactForm.querySelector('textarea');
  const header = contactForm.querySelector('.js-contact-header');

  contactForm.addEventListener('submit', e => {
    e.preventDefault();

    if (isFilled(name) && isValid(email) && isFilled(message)) {
      reset(name);
      reset(email);
      reset(message);
      header.innerText = 'Message sent!';
    } else {
      header.innerText = 'contact us';
      if (!isFilled(name)) indicateInvalid(name, 'Please enter your name!');
      if (!isValid(email)) indicateInvalid(email, 'Please enter valid email!');
      if (!isFilled(message))
        indicateInvalid(message, 'Please enter some message!');
    }
  });
};

/* Helper methods
========================================================================== */

const test = (element, errorMessage) => {
  isValid(element) ? reset(element) : indicateInvalid(element, errorMessage);
};

const isValid = email => {
  const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailPattern.test(email.value);
};

const isFilled = element => element.value !== '';

const indicateInvalid = (element, message) => {
  element.style.border = '1px solid #f7564b';
  element.nextElementSibling.innerText = message;
};

const reset = element => {
  element.value = '';
  element.style.border = 'none';
  element.nextElementSibling.innerText = '';
};
