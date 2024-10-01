const HeroSlides = document.querySelectorAll('.promo-slide');

const createElement = (tagName, className) => {
  const newEl = document.createElement(tagName);
  newEl.classList.add(className);
  return newEl;
};

const addFalseBullets = (slide, slideIndex) => {
  const paginationEl = slide.querySelector('.promo-slide__false-pagination');
  const amountBullets = HeroSlides.length;

  for (let i = 0; i < amountBullets; i++) {
    paginationEl.append(createElement('span', 'promo-slide__false-bullet'));
  }

  const Bullets = paginationEl.querySelectorAll('.promo-slide__false-bullet');
  Bullets.forEach((bullet, index) => {
    if (index === slideIndex) {
      bullet.classList.add('promo-slide__false-bullet--is-active');
    }
  });
};

const setSlidesBullets = () => {
  HeroSlides.forEach((slide, index) => addFalseBullets(slide, index));
};

export { setSlidesBullets };
