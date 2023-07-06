const counterValue = document.getElementById('value');
const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');

const OnDecrementButtonClick = () => { 
    counterValue.textContent = Number(counterValue.textContent) - 1;
}

const OnIncrementButtonClick = () => { 
    counterValue.textContent = Number(counterValue.textContent) + 1;
}

decrementButton.addEventListener('click', OnDecrementButtonClick);
incrementButton.addEventListener('click', OnIncrementButtonClick);