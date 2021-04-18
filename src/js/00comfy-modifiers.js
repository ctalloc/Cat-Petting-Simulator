/* eslint-disable no-undef */
'use strict';

let comfyCounterElement = 31;

const headBtnElement = document.querySelector('.jsHeadBtn');
const backBtnElement = document.querySelector('.jsBackBtn');
const tummyBtnElement = document.querySelector('.jsTummyBtn');
const catReactDisplay = document.querySelector('.js-catReact');

function getRandomInt(min, max) {
  const result = Math.floor(Math.random() * (max - min)) + min;
  return result;
}

function handleBackButton() {
  if (comfyCounterElement > 51) {
    comfyCounterElement -= 1;
  } else if (comfyCounterElement <= 51 && comfyCounterElement >= 31) {
    const result = getRandomInt(1, 10);
    if (result <= 5) {
      comfyCounterElement;
    } else if (result > 5 && result <= 7) {
      comfyCounterElement += 1;
    } else if (result > 8) {
      comfyCounterElement += 2;
    }
  } else {
    comfyCounterElement += 1;
  }
  console.log(comfyCounterElement);
  handleComfyImg();
  handleComfyTxt();
}

function handleHeadButton() {
  comfyCounterElement += 2;
  console.log(comfyCounterElement);
  handleComfyImg();
  handleComfyTxt();
  goodReaction()
}

function handleTummyButton() {
  if (comfyCounterElement >= 76) {
    const result = getRandomInt(1, 10);
    if (result <= 1) {
      const result = getRandomInt(-20, 20);
      comfyCounterElement += result;
    } else if (result >= 2 && result <= 4) {
      const result = getRandomInt(-5, 5);
      comfyCounterElement += result;
    } else if (result >= 5 && result <= 8) {
      const result = getRandomInt(-2, 2);
      comfyCounterElement += result;
    } else if (result >= 9) {
      comfyCounterElement += 1;
    }
  } else if (comfyCounterElement >= 51) {
    comfyCounterElement += 1;
  } else if (comfyCounterElement >= 31) {
    comfyCounterElement -= 3;
  } else if (comfyCounterElement < 31) {
    comfyCounterElement -= 5;
  }
  handleComfyImg();
  handleComfyTxt();
  console.log(comfyCounterElement);
}


headBtnElement.addEventListener('click', handleHeadButton);
backBtnElement.addEventListener('click', handleBackButton);
tummyBtnElement.addEventListener('click', handleTummyButton);
