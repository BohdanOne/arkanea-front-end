import { tns } from "tiny-slider/src/tiny-slider";

const initializeSlider = () => {
  const slider = tns({
    container: ".c-slides__list",
    items: 1,
    slideBy: "page",
    nav: true,
    navContainer: ".c-slides__controls",
    navPosition: "bottom",
    arrowKeys: true,
    controls: false,
    touch: true,
    mouseDrag: true,
    speed: 500
  });
};

export default initializeSlider;
