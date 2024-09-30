const menuEl = document.querySelector('.page-header__nav');
const menuButtonEl = menuEl.querySelector('.main-nav__burger');
const menuButtonNameEl = menuButtonEl.querySelector('.burger__name');
const menuButtonIconEl = menuButtonEl.querySelector('.burger__icon');
const menuContainerEl = menuEl.querySelector('.main-nav__container');
const overlayEl = menuEl.querySelector('.main-nav__overlay');
const menuListEl = menuEl.querySelector('.main-nav__list');
const submenuEls = menuEl.querySelectorAll('.main-nav__link--submenu');

const closeSubmenu = (submenuEl) => {
  const isOpen = submenuEl.matches('.main-nav__link--submenu-open');
  if (isOpen) {
    submenuEl.classList.remove('main-nav__link--submenu-open');
  }
};

const toggleMenu = () => {
  menuEl.classList.toggle('main-nav--is-open');
  menuContainerEl.classList.toggle('container');
  menuContainerEl.classList.toggle('main-nav__container--is-open');
  menuListEl.classList.toggle('main-nav__list--is-open');
  overlayEl.classList.toggle('main-nav__overlay--is-open');
  menuButtonEl.classList.toggle('burger--is-open');
  menuButtonNameEl.classList.toggle('burger__name--is-open');
  menuButtonIconEl.classList.toggle('burger__icon--is-open');
  submenuEls.forEach((submenuEl) => closeSubmenu(submenuEl));
};

const onBurgerClick = () => {
  toggleMenu();
};

const onOverlayClick = (evt) => {
  const isOverlay = evt.target.matches('.main-nav__overlay');
  if (isOverlay) {
    toggleMenu();
  }
};

const onMenuItemClick = (evt) => {
  const clickedEl = evt.target;
  const isSubmenuEl = clickedEl.matches('.main-nav__link--submenu');
  const isMenuEl = clickedEl.matches('.main-nav__link') || clickedEl.matches('.main-nav__sublink');
  if (isSubmenuEl) {
    clickedEl.classList.toggle('main-nav__link--submenu-open');
  } else if (isMenuEl) {
    toggleMenu();
  }
};

const toggledMenu = () => {
  menuButtonEl.addEventListener('click', onBurgerClick);
  menuEl.addEventListener('click', onMenuItemClick);
  overlayEl.addEventListener('click', onOverlayClick);
};

export { toggledMenu };
