import Swiper from 'swiper';
import { Navigation, Scrollbar } from 'swiper/modules';
import 'swiper/css';

const programSlider = new Swiper('.programs__slider', {
  modules: [Navigation, Scrollbar],
  direction: 'horizontal',
  loop: false,
  scrollbar: {
    el: '.slider-controls__pagination--programs',
    dragClass: 'slider-controls__pagination-fill',
    hide: false,
  },
  navigation: {
    nextEl: '.slider-controls__button--programs-next',
    prevEl: '.slider-controls__button--programs-prev',
    disabledClass: 'slider-controls__button--disabled',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      allowTouchMove: 'true',
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
      allowTouchMove: 'true',
      scrollbar: {
        dragSize: 326,
      },
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 32,
      allowTouchMove: 'false',
      scrollbar: {
        dragSize: 394,
      },
    },
  },
});

export { programSlider };
