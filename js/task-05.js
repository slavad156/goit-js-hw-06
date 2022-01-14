const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

const EMPTY_INPUT = 'Anonymous';

const onInputChange = event => {
  outputRef.textContent = event.currentTarget.value;
  if (event.currentTarget.value === '') {
    outputRef.textContent = EMPTY_INPUT;
  }
};

inputRef.addEventListener('input', onInputChange);
