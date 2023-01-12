TIMER_DELAY = 1000;
let changeColorInterval = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
  body: document.querySelector('body'),
};

refs.startBtn.addEventListener('click', onStartBtnClick);
refs.stopBtn.addEventListener('click', onStopBtnClick);

function onStartBtnClick() {
  changeColorInterval = setInterval(changeColor, TIMER_DELAY);
  refs.startBtn.setAttribute('disabled', '');
}

function changeColor() {
  const color = getRandomHexColor();
  refs.body.style.backgroundColor = color;
}

function onStopBtnClick() {
  clearInterval(changeColorInterval);
  refs.startBtn.removeAttribute('disabled');
}
