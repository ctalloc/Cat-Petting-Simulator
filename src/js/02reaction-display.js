'use strict';

function goodReaction() {
  resetAnimation()
  catReactDisplay.classList.add('reactNow')
  let src = './assets/images/cat-reactions/happycat.jpg';
  catReactDisplay.src = src;
  clearDisplay()
}

function loveReaction() {
  resetAnimation()
  catReactDisplay.classList.add('reactNow')
  let src = './assets/images/cat-reactions/lovecat.jpg';
  catReactDisplay.src = src;
  clearDisplay()
}

function sadReaction() {
  resetAnimation()
  catReactDisplay.classList.add('reactNow')
  let src = './assets/images/cat-reactions/sadcat.jpg';
  catReactDisplay.src = src;
  clearDisplay()
}

function angryReaction() {
  resetAnimation()
  catReactDisplay.classList.add('reactNow')
  let src = './assets/images/cat-reactions/angrycat.jpg';
  catReactDisplay.src = src;
  clearDisplay()
}

function ottReaction() {
  resetAnimation()
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

function resetAnimation() {
  clearImgSrc()
  stopAnimation()
}