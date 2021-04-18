const rgbColor = document.querySelector('#rgb-color');
const colorOptions = document.querySelector('#color-options');

function randomRgb() {
  let rgb = 'Qual é a cor rgb(';
  let randomNumber = Math.round(Math.random() * 256);
  rgb = rgb.concat(randomNumber, ', ');
  randomNumber = Math.round(Math.random() * 256);
  rgb = rgb.concat(randomNumber, ', ');
  randomNumber = Math.round(Math.random() * 256);
  rgb = rgb.concat(randomNumber, ')?');
  console.log(rgb);
  return rgb;
}

function colorOptionsContainer(numberOfOptions) {
  for (let index = 0; index < numberOfOptions; index += 1) {
    const newColor = document.createElement('div');
    newColor.classList.add('ball');
    colorOptions.appendChild(newColor);
  }
}

rgbColor.innerText = randomRgb();
colorOptionsContainer(6);
