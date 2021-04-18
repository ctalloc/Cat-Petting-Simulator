'use strict';

function goodReaction() {
  catReactDisplay.classList.add('reactNow')
  let src = './assets/images/cat-reactions/happycat.jpg';
  catReactDisplay.src = src;
  setTimeout(clearDisplay, 500);
  setTimeout(stopAnimation, 1000)
}

function loveReaction() {
  catReactDisplay.classList.add('reactNow')
  let src = './assets/images/cat-reactions/lovecat.jpg';
  catReactDisplay.src = src;
  setTimeout(clearDisplay, 500);
  setTimeout(stopAnimation, 1000)
}

function sadReaction() {
  catReactDisplay.classList.add('reactNow')
  let src = './assets/images/cat-reactions/sadcat.jpg';
  catReactDisplay.src = src;
  setTimeout(clearDisplay, 500);
  setTimeout(stopAnimation, 1000)
}

function angryReaction() {
  catReactDisplay.classList.add('reactNow')
  let src = './assets/images/cat-reactions/angrycat.jpg';
  catReactDisplay.src = src;
  setTimeout(clearDisplay, 500);
  setTimeout(stopAnimation, 1000)
}

function ottReaction() {
  catReactDisplay.classList.add('reactNow')
  let src = './assets/images/cat-reactions/butwhy.jpg';
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