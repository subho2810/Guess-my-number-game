'use strict';
const check = document.querySelector('.check');
const guess = document.querySelector('.guess');
const message = document.querySelector('.message');
const highscore = document.querySelector('.highscore');
const number = document.querySelector('.number');
const body = document.querySelector('body');
const again = document.querySelector('.again');
const scores = document.querySelector('.score');
let secretenumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let hx = 0;
function change(str, score) {
  if (score > 1) {
    message.textContent = str;
    scores.textContent = score - 1;
    score = score - 1;
  } else {
    message.textContent = 'GAME OVER😱😱🥵';
    scores.textContent = 0;
  }
  return score;
}

const checknum = function () {
  const guessnum = Number(guess.value);
  if (!guessnum) {
    message.textContent = 'No number 🤔';
  } else if (guessnum === secretenumber) {
    message.textContent = 'Correct Answer!!!!✨✨🎉🎉';
    if (score > hx) {
      hx = score;
      highscore.textContent = hx;
    }
    number.textContent = secretenumber;
    body.style.backgroundColor = 'red';
    number.style.width = '30rem';
  } else if (guessnum < secretenumber) score = change('TOO LOW 🙄', score);
  else score = change('TOO HIGH 😣', score);
};

const reset = function () {
  // reset the game function
  scores.textContent = 20;
  body.style.backgroundColor = '#222';
  number.style.width = '15rem';
  number.textContent = '?';
  score = 20;
  secretenumber = Math.trunc(Math.random() * 20) + 1;
  guess.value = '';
  message.textContent = 'Start guessing . .   .  .  🎉';
};

check.addEventListener('click', checknum);
again.addEventListener('click', reset);
