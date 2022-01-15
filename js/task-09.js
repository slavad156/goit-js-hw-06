const getRandomHexColor = function () {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const bodyRef = document.querySelector('body');
const btnRef = document.querySelector('.change-color');
const currentColor = document.querySelector('.color');

const randomColor = function () {
  currentColor.textContent = getRandomHexColor();
  bodyRef.style.backgroundColor = currentColor.textContent;
};

btnRef.addEventListener('click', randomColor);
