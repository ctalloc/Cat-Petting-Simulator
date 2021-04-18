/* eslint-disable no-undef */
'use strict';

const comfyNumberTxt = document.querySelector('.js-comfyNmbr');
const comfyImgDisplay = document.querySelector('.js-comfyImg');

function handleComfyTxt() {
  let html = '';
  if(comfyCounterElement >= 1 && comfyCounterElement <= 15) {
    html = 'Stahp';
  }
  else if(comfyCounterElement >= 16 && comfyCounterElement <= 30) {
    html = 'Ugh';
  }
  else if(comfyCounterElement >= 31 && comfyCounterElement <= 50) {
    html = 'What';
  }
  else if(comfyCounterElement >= 51 && comfyCounterElement <= 75) {
    html = 'Dis is fine';
  }
  else if(comfyCounterElement >= 76 && comfyCounterElement <= 100) {
    html = 'Moar rubs pls';
  }
  else if(comfyCounterElement >= 101 && comfyCounterElement <= 130) {
    html = 'I iz pleased';
  }
  comfyNumberTxt.innerHTML = html;
}

function handleComfyImg() {
  let src = '';
  if(comfyCounterElement >= 1 && comfyCounterElement <= 15) {
    src = './assets/images/cat-comfyness/ugh.jpg';
  }
  else if(comfyCounterElement >= 16 && comfyCounterElement <= 30) {
    src = './assets/images/cat-comfyness/disgusted.jpg';
  }
  else if(comfyCounterElement >= 31 && comfyCounterElement <= 50){
    src = './assets/images/cat-comfyness/posok.jpg';
  }
  else if(comfyCounterElement >= 51 && comfyCounterElement <= 75) {
    src = './assets/images/cat-comfyness/happy.jpg';
  }
  else if(comfyCounterElement >= 76 && comfyCounterElement <= 100) {
    src = './assets/images/cat-comfyness/hehemore.jpg';
  }
  else if(comfyCounterElement >= 101 && comfyCounterElement <= 130) {
    src = './assets/images/cat-comfyness/kotblush.jpg';
  }
  comfyImgDisplay.src = src;
}

handleComfyImg();
handleComfyTxt();