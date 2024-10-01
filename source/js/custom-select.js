const formBlockEl = document.querySelector('.form-block__form');

const onSelectItemClick = (evt, input, selectButton) => {
  if (evt.target.matches('.custom-select__button')) {
    const clickedItem = evt.target;
    selectButton.textContent = clickedItem.textContent;
    input.value = clickedItem.textContent;
  }
};

const onSelectClick = (input, selectButton, selectList) => {
  selectList.classList.toggle('custom-select__list--is-open');
  if (selectList.classList.contains('custom-select__list--is-open')) {
    selectList.addEventListener('click', (evt) => onSelectItemClick(evt, input, selectButton));
  } else {
    selectList.removeEventListener('click', (evt) => onSelectItemClick(evt, input, selectButton));
  }
};

const initSelect = (formEl) => {
  const customSelect = formEl.querySelector('.custom-select');
  const customSelectInp = customSelect.querySelector('input');
  const customSelectButton = customSelect.querySelector('.custom-select__current-value');
  const customSelectList = customSelect.querySelector('.custom-select__list');

  customSelectButton.addEventListener('click', onSelectClick.bind(null, customSelectInp, customSelectButton, customSelectList));

  if (getComputedStyle(formEl).display === 'none') {
    customSelectButton.removeEventListener('click', onSelectClick.bind(null, customSelectInp, customSelectButton, customSelectList));
  }
};

const initMainFormSelect = () => {
  initSelect(formBlockEl);
};

export {
  initSelect,
  initMainFormSelect
};
