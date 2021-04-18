const rgbColor = document.querySelector('#rgb-color');

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

rgbColor.innerText = randomRgb();
