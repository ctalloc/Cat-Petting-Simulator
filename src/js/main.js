'use strict';

let comfyCounterElement = 0;

const headButtonElement = document.querySelector('.jsHeadBtn');
const comfyNumberTxt = document.querySelector(".js-comfyNmbr");

function handleHeadButton() {
  comfyCounterElement += 2;
  console.log(comfyCounterElement);
  handleNmbrTxt();
}

function handleNmbrTxt() {
  let html = comfyCounterElement;
  comfyNumberTxt.innerHTML = html;
}

headButtonElement.addEventListener('click', handleHeadButton);
