import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';

const programSlider = new Swiper('.programs__slider', {
  modules: [Navigation, Pagination],
  direction: 'horizontal',
  loop: false,
  pagination: {
    el: '.slider-controls__pagination--programs',
    progressbarFillClass: 'slider-controls__pagination-fill',
    type: 'progressbar',
    clickable: false,
  },
  navigation: {
    nextEl: '.slider-controls__button--programs-next',
    prevEl: '.slider-controls__button--programs-prev',
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
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 32,
      allowTouchMove: 'false',
    },
  },
});

export { programSlider };
