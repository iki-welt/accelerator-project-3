import Swiper from 'swiper';
import { Navigation, Scrollbar } from 'swiper/modules';
import 'swiper/css';

const reviewsSlider = new Swiper('.reviews__slider', {
  modules: [Navigation, Scrollbar],
  direction: 'horizontal',
  loop: false,
  scrollbar: {
    el: '.slider-controls__pagination--reviews',
    dragClass: 'slider-controls__pagination-fill',
    hide: false,
  },
  navigation: {
    nextEl: '.slider-controls__button--reviews-next',
    prevEl: '.slider-controls__button--reviews-prev',
    disabledClass: 'slider-controls__button--disabled',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 15,
      allowTouchMove: 'true',
    },
    768: {
      slidesPerView: 'auto',
      spaceBetween: 30,
      allowTouchMove: 'true',
      scrollbar: {
        dragSize: 326,
      },
    },
    1440: {
      slidesPerView: 2,
      spaceBetween: 32,
      allowTouchMove: 'false',
      scrollbar: {
        dragSize: 394,
      },
    },
  },
});

export { reviewsSlider };
