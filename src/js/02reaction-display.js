'use strict';

function goodReaction() {
  catReactDisplay.classList.add('reactNow')
  let src = './assets/images/cat-reactions/happycat.jpg';
  catReactDisplay.src = src;
  setTimeout(clearDisplay, 500);
  setTimeout(stopAnimation, 1000)
}

function clearDisplay() {
  catReactDisplay.src = '';
}

function stopAnimation() {
  catReactDisplay.classList.remove('reactNow')
} 