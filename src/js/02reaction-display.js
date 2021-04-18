'use strict';

function goodReaction() {
  catReactDisplay.classList.add('reactNow')
  let src = './assets/images/cat-reactions/happycat.jpg';
  catReactDisplay.src = src;
  clearDisplay()
}

function loveReaction() {
  catReactDisplay.classList.add('reactNow')
  let src = './assets/images/cat-reactions/lovecat.jpg';
  catReactDisplay.src = src;
  clearDisplay()
}

function sadReaction() {
  catReactDisplay.classList.add('reactNow')
  let src = './assets/images/cat-reactions/sadcat.jpg';
  catReactDisplay.src = src;
  clearDisplay()
}

function angryReaction() {
  catReactDisplay.classList.add('reactNow')
  let src = './assets/images/cat-reactions/angrycat.jpg';
  catReactDisplay.src = src;
  clearDisplay()
}

function ottReaction() {
  catReactDisplay.classList.add('reactNow')
  let src = './assets/images/cat-reactions/butwhy.jpg';
  catReactDisplay.src = src;
  clearDisplay()
}

function clearImgSrc() {
  catReactDisplay.src = '';
}

function stopAnimation() {
  catReactDisplay.classList.remove('reactNow')
} 

function clearDisplay() {
  setTimeout(stopAnimation, 700)
  setTimeout(clearImgSrc, 710)
} 