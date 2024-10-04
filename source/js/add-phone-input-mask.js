const phoneInpEls = document.querySelectorAll('.form-item__inp--phone');

const addMaskInp = (phoneInp) => {
  if (document.activeElement === phoneInp && phoneInp.value === '') {
    phoneInp.value = '+7';
  }
};

const clearMaskInp = (phoneInp) => {
  if (phoneInp.value === '+7') {
    phoneInp.value = '';
  }
};

const initMask = () => {
  phoneInpEls.forEach((phoneInp) => {
    phoneInp.addEventListener('focusin', addMaskInp.bind(null, phoneInp));
    phoneInp.addEventListener('focusout', clearMaskInp.bind(null, phoneInp));
  });
};

export { initMask };
