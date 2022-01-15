const getRandomHexColor = function () {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const refs = {
  inputRef: document.querySelector('#controls input'),
  btnCreateRef: document.querySelector('[data-create]'),
  btnDestroyRef: document.querySelector('[data-destroy]'),
  boxesRef: document.querySelector('#boxes'),
};

const createBoxes = function (amount) {
  let startSize = 30;
  const arrBox = [];

  for (let i = 0; i < amount; i += 1) {
    let size = startSize + i * 10;

    const createDiv = document.createElement('div');
    createDiv.style.width = `${size}px`;
    createDiv.style.height = `${size}px`;
    createDiv.style.backgroundColor = getRandomHexColor();
    arrBox.push(createDiv);
  }

  return refs.boxesRef.append(...arrBox);
};

const getAmount = function () {
  createBoxes(Number(refs.inputRef.value));
};
const destroyBoxes = function () {
  refs.boxesRef.innerHTML = '';
};

refs.btnCreateRef.addEventListener('click', getAmount);
refs.btnDestroyRef.addEventListener('click', destroyBoxes);
