const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

const EMPTY_INPUT = 'Anonymous';

const onInputChange = event => {
  event.currentTarget.value === ''
    ? (outputRef.textContent = EMPTY_INPUT)
    : (outputRef.textContent = event.currentTarget.value);
};

inputRef.addEventListener('input', onInputChange);
