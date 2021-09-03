const rgbColor = document.querySelector('#rgb-color');
const colorOptions = document.querySelector('#color-options');
let correctOption = '';
const answer = document.querySelector('#answer');
const resetGame = document.querySelector('#reset-game');
const score = document.querySelector('#score');

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

function randomColors(rightOption) {
  const allOptions = document.querySelectorAll('.ball');
  const randomPosition = Math.round(Math.random() * (allOptions.length - 1));
  for (let index = 0; index < allOptions.length; index += 1) {
    if (index === randomPosition) {
      allOptions[index].style.backgroundColor = rightOption;
    } else {
      allOptions[index].style.backgroundColor = randomRgb();
    }
  }
  answer.innerText = 'Escolha uma cor';
}

function resetGameItems() {
  correctOption = randomRgb();
  randomColors(correctOption);
  rgbColor.innerText = ('Qual é a cor ').concat(correctOption, '?');
}

function isThisOptionCorrect(event) {
  if (event.target.style.backgroundColor === correctOption) {
    score.value += 3;
    score.innerText = score.value;
    resetGameItems();
    answer.innerText = 'Acertou!';
  } else {
    answer.innerText = 'Errou! Tente novamente!';
    if (score.value > 0) {
      score.value -= 1;
      score.innerText = score.value;
    }
  }
}

[colorOptions, resetGame].forEach((item) => {
  item.addEventListener('click', (event) => {
    if (event.target.classList.contains('ball')) {
      isThisOptionCorrect(event);
    } else if (item === resetGame) {
      resetGameItems();
    }
  });
});

correctOption = randomRgb();
rgbColor.innerText = ('Qual é a cor ').concat(correctOption, '?');
optionsContainer(6);
randomColors(correctOption);
score.value = 0;
score.innerText = score.value;
