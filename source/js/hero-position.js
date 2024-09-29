const headerEl = document.querySelector('.page-header');
const heroEl = document.querySelector('.hero');

const setHeroPosition = () => {
  const headerHeight = headerEl.offsetHeight;
  heroEl.style.setProperty('--header-height', `${headerHeight}px`);
};

export {setHeroPosition};
