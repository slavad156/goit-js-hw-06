const inputRef = document.querySelector('#validation-input');

const onInputBlur = event =>
  event.currentTarget.value.length === Number(inputRef.dataset.length)
    ? inputRef.setAttribute('class', 'valid')
    : inputRef.setAttribute('class', 'invalid');

inputRef.addEventListener('blur', onInputBlur);
