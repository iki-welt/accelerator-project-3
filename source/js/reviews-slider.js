import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';

const reviewsSlider = new Swiper('.reviews__slider', {
  modules: [Navigation, Pagination],
  direction: 'horizontal',
  loop: false,
  pagination: {
    el: '.slider-controls__pagination--reviews',
    progressbarFillClass: 'slider-controls__pagination-fill',
    type: 'progressbar',
    clickable: false,
  },
  navigation: {
    nextEl: '.slider-controls__button--reviews-next',
    prevEl: '.slider-controls__button--reviews-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 15,
      allowTouchMove: 'true',
    },
    768: {
      slidesPerView: 1.15,
      spaceBetween: 30,
      allowTouchMove: 'true',
    },
    1440: {
      slidesPerView: 2,
      spaceBetween: 32,
      allowTouchMove: 'false',
    },
  },
});

export { reviewsSlider };
