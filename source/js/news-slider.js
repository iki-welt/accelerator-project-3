import Swiper from 'swiper';
import { Navigation, Pagination, Grid } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/grid';

const sliderContainer = document.querySelector('.news__slider');
const sliderWrapper = document.querySelector('.news__slider-wrapper');
const Slides = sliderContainer.querySelectorAll('.news__slide');

const changeSlideHeight = (slide, index) => {
  if (sliderContainer.offsetWidth === 290) {
    if (index % 2 !== 0) {
      slide.style.height = '240px';
    } else {
      slide.style.height = '330px';
    }
  }
};

const setSlides = () => {
  Slides.forEach((slide, index) => changeSlideHeight(slide, index));
};

const setFirstSlide = (currentSlide, activeSlide) => {
  currentSlide.querySelector('.news-card__pic-wrapper').classList.remove('news-card__pic-wrapper--first');
  currentSlide.querySelector('.news-card__title').classList.remove('news-card__title--first');
  currentSlide.querySelector('.news-card__descr-wrapper').classList.remove('news-card__descr-wrapper--first');
  currentSlide.classList.remove('news-card--first');

  activeSlide.querySelector('.news-card__pic-wrapper').classList.add('news-card__pic-wrapper--first');
  activeSlide.querySelector('.news-card__title').classList.add('news-card__title--first');
  activeSlide.querySelector('.news-card__descr-wrapper').classList.add('news-card__descr-wrapper--first');
  activeSlide.classList.add('news-card--first');
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
    disabledClass: 'slider-controls__button--disabled',
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
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 30,
      grid: {
        rows: 2,
        fill: 'row',
      },
      allowTouchMove: 'true',
    },
    1440: {
      slidesPerView: 'auto',
      slidesPerGroup: 3,
      spaceBetween: 32,
      grid: false,
      loopAddBlankSlides: true,
      allowTouchMove: 'false',
    },
  },
},
);

const setStartPagination = () => {
  if (newsSlider.pagination.bullets.length > 4) {
    newsSlider.pagination.bullets.forEach((bullet, index) => {
      if (index > 3) {
        bullet.style.display = 'none';
      }
    });
  }
};

const setDynamicPagination = () => {
  const ativeSlide = newsSlider.snapIndex;
  if (ativeSlide >= 3) {
    newsSlider.pagination.bullets.forEach((bullet, index) => {
      bullet.style.display = 'flex';
      const isShowed = (index + 2 === ativeSlide) || (index + 1 === ativeSlide) || (index === ativeSlide) || (index - 1 === ativeSlide);
      if (!isShowed) {
        bullet.style.display = 'none';
      }
    });
  } else if (ativeSlide === 0) {
    newsSlider.pagination.bullets.forEach((bullet) => {
      bullet.style.display = 'flex';
      setStartPagination();
    });
  }
};

const changeFirstSlideWidth = () => {
  if (sliderContainer.offsetWidth === 1240) {
    const activeSlide = sliderWrapper.querySelector('.swiper-slide-active');
    if (!activeSlide.matches('.news-card--first')) {
      const currentSlide = sliderWrapper.querySelector('.news-card--first');
      setFirstSlide(currentSlide, activeSlide);
      newsSlider.update();
    }
  }
};

newsSlider.on('afterInit', setSlides());
newsSlider.on('afterInit', setStartPagination());
newsSlider.on('slideChangeTransitionStart', changeFirstSlideWidth);
newsSlider.on('slideChangeTransitionStart', setDynamicPagination);

export { newsSlider };
