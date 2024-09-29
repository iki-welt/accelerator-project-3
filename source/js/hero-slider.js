import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css';

const sliderWrapper = document.querySelector('.hero__slider-wrapper');
const sliderPagination = document.querySelector('.hero__slider-pagination');

const onHeroSlideChange = () => {
  let currentSlide = sliderWrapper.querySelector('.swiper-slide-active');
  if (!currentSlide) {
    currentSlide = sliderWrapper.querySelector('.promo-slide:first-child');
  }
  const contentHeight = currentSlide.querySelector('.promo-slide__content').offsetHeight;
  sliderPagination.style.setProperty('--pagination-position', `${contentHeight}px`);
};

const heroSlider = new Swiper('.hero__slider', {
  modules: [Pagination],
  direction: 'horizontal',
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: '.hero__slider-pagination',
    bulletClass: 'hero__pagination-bullet',
    bulletActiveClass: 'hero__pagination-bullet--is-active',
    type: 'bullets',
    clickable: true,
  },
  breakpoints: {
    320: {
      width: 320,
      allowTouchMove: 'true',
    },
    768: {
      width: 768,
      allowTouchMove: 'true',
    },
    1440: {
      width: 1440,
      allowTouchMove: 'false',
    },
  },
  on: {
    init: onHeroSlideChange(),
  },
});

heroSlider.on('slideChangeTransitionStart',onHeroSlideChange);
