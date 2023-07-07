const bodyOfDoc = document.querySelector('body');
const colorName = document.querySelector('.color');
const changeColorBtn = document.querySelector('.change-color');


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

changeColorBtn.addEventListener('click', onBtnChangeColor);

function onBtnChangeColor() { 
  const color = getRandomHexColor();
  colorName.textContent = color;
  bodyOfDoc.style.backgroundColor = color;
}
