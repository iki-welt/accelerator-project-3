import Swiper from 'swiper';
import { Navigation, Pagination, Grid } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/grid';
const Slides = document.querySelectorAll('.news__slide');

const changeSlideHeight = (slide, index) => {
  if (index % 2 !== 0) {
    slide.style.height = '240px';
  } else {
    slide.style.height = '330px';
  }
};

const setSlides = () => {
  Slides.forEach((slide, index) => changeSlideHeight(slide, index));
};

const newsSlider = new Swiper('.news__slider', {
  modules: [Navigation, Pagination, Grid],
  direction: 'horizontal',
  loop: false,
  pagination: {
    el: '.slider-controls__pagination--news',
    bulletClass: 'slider-controls__count-bullet',
    bulletActiveClass: 'slider-controls__count-bullet--active',
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class= "${className}">${index + 1}</span>`;
    },
  },
  navigation: {
    nextEl: '.slider-controls__button--news-next',
    prevEl: '.slider-controls__button--news-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
      grid: {
        rows: 2,
      },
      allowTouchMove: 'true',
    },
  },
  768: {
    // slidesPerView: 2,
    // spaceBetween: 30,
    // allowTouchMove: 'true',
  },
  1440: {
    // slidesPerView: 3,
    // spaceBetween: 32,
    // allowTouchMove: 'false',
  },
},
);

newsSlider.on('afterInit', setSlides());

export { newsSlider };
