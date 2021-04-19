const rgbColor = document.querySelector('#rgb-color');
const colorOptions = document.querySelector('#color-options');
let correctOption = '';
const answer = document.querySelector('#answer');

function randomRgb() {
  let rgb = 'rgb(';
  let randomNumber = Math.round(Math.random() * 256);
  rgb = rgb.concat(randomNumber, ', ');
  randomNumber = Math.round(Math.random() * 256);
  rgb = rgb.concat(randomNumber, ', ');
  randomNumber = Math.round(Math.random() * 256);
  rgb = rgb.concat(randomNumber, ')');
  return rgb;
}

function optionsContainer(numberOfOptions) {
  for (let index = 0; index < numberOfOptions; index += 1) {
    const newColor = document.createElement('div');
    newColor.classList.add('ball');
    colorOptions.appendChild(newColor);
  }
}

function randomColors() {
  const allOptions = document.querySelectorAll('.ball');
  const rgbBegin = rgbColor.innerText.indexOf('(') - 3;
  const rgbEnd = rgbColor.innerText.indexOf('?');
  const rightOption = rgbColor.innerText.substr(rgbBegin, rgbEnd - rgbBegin);
  const randomPosition = Math.round(Math.random() * allOptions.length);
  for (let index = 0; index < allOptions.length; index += 1) {
    if (index === randomPosition) {
      allOptions[index].style.backgroundColor = rightOption;
    } else {
      allOptions[index].style.backgroundColor = randomRgb();
    }
  }
  return rightOption;
}

[colorOptions].forEach((item) => {
  item.addEventListener('click', (event) => {
    if (event.target.classList.contains('ball')) {
      if (event.target.style.backgroundColor === correctOption) {
        answer.innerText = 'Acertou!';
      } else {
        answer.innerText = 'Errou! Tente novamente!';
      }
    }
  });
});

rgbColor.innerText = ('Qual é a cor ').concat(randomRgb(), '?');
optionsContainer(6);
correctOption = randomColors();
