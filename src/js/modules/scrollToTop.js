export default () => {
  const logo = document.querySelector('.js-logo');

  logo.addEventListener('click', e => {
    e.preventDefault();
    scrollToTop();
  });
};

const scrollToTop = () => {
  const startPosition = window.pageYOffset;
  const distance = 0 - startPosition;
  let startTime = null;

  const animation = currentTime => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;

    const run = ease(timeElapsed, startPosition, distance, 200);
    window.scrollTo(0, run);

    if (timeElapsed < 200) requestAnimationFrame(animation);
  };

  const ease = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t * t + b;
    t -= 2;
    return (c / 2) * (t * t * t + 2) + b;
  };

  requestAnimationFrame(animation);
};
