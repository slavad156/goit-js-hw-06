let counterValue = 0;

const btnDecrementRef = document.querySelector('[data-action="decrement"]');
const btnIncrementRef = document.querySelector('[data-action="increment"]');

const counter = document.querySelector('#value');

const decrement = () => (counter.textContent = counterValue -= 1);
const increment = () => (counter.textContent = counterValue += 1);

btnDecrementRef.addEventListener('click', decrement);
btnIncrementRef.addEventListener('click', increment);
