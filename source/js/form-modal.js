import { initSelect } from './custom-select';

const modalOpenButtonEl = document.querySelector('.about__link');
const modalEl = document.querySelector('.form-modal');
const modalCloseButtonEl = modalEl.querySelector('.form-modal__close-button');
const modalSubmitButtonEl = modalEl.querySelector('.form__submit--modal');
const modalFormEl = modalEl.querySelector('.form-modal__form');

const onCloseModalClick = () => {
  modalFormEl.reset();
  closeModal();
};

const onSubmitModalClick = () => {
  closeModal();
};

function closeModal () {
  modalEl.classList.remove('form-modal--is-open');
  modalCloseButtonEl.removeEventListener('click', onCloseModalClick);
  modalSubmitButtonEl.removeEventListener('click', onSubmitModalClick);
  initSelect(modalEl);
}

const openModal = () => {
  modalEl.classList.add('form-modal--is-open');
  initSelect(modalEl);
  modalCloseButtonEl.addEventListener('click', onCloseModalClick);
  modalSubmitButtonEl.addEventListener('click', onSubmitModalClick);
};

const initModalButton = () => {
  modalOpenButtonEl.addEventListener('click', openModal);
};

export {initModalButton};
