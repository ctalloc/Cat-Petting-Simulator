/* eslint-disable no-undef */
'use strict';

const comfyNumberTxt = document.querySelector('.js-comfyNmbr');
const comfyImgDisplay = document.querySelector('.js-comfyImg');

function handleComfyTxt() {
  let html = '';
  if(comfyCounterElement >= -20 && comfyCounterElement <= -11) {
    html = 'Stahp';
  }
  else if(comfyCounterElement >= -10 && comfyCounterElement <= -1) {
    html = 'Ugh';
  }
  else if(comfyCounterElement >= 0 && comfyCounterElement <= 10) {
    html = 'What';
  }
  else if(comfyCounterElement >= 11 && comfyCounterElement <= 20) {
    html = 'Dis is fine';
  }
  else if(comfyCounterElement >= 21 && comfyCounterElement <= 36) {
    html = 'Moar rubs pls';
  }
  else if(comfyCounterElement >= 36 && comfyCounterElement <= 50) {
    html = 'I iz pleased';
  }
  comfyNumberTxt.innerHTML = html;
}

function handleComfyImg() {
  let src = '';
  if(comfyCounterElement >= -20 && comfyCounterElement <= -11) {
    src = './assets/images/cat-comfyness/ugh.jpg';
  }
  else if(comfyCounterElement >= -10 && comfyCounterElement <= -1) {
    src = './assets/images/cat-comfyness/disgusted.jpg';
  }
  else if(comfyCounterElement >= 0 && comfyCounterElement <= 10) {
    src = './assets/images/cat-comfyness/posok.jpg';
  }
  else if(comfyCounterElement >= 11 && comfyCounterElement <= 20) {
    src = './assets/images/cat-comfyness/happy.jpg';
  }
  else if(comfyCounterElement >= 21 && comfyCounterElement <= 36) {
    src = './assets/images/cat-comfyness/hehemore.jpg';
  }
  else if(comfyCounterElement >= 36 && comfyCounterElement <= 50) {
    src = './assets/images/cat-comfyness/kotblush.jpg';
  }
  comfyImgDisplay.src = src;
}

handleComfyImg();
handleComfyTxt();