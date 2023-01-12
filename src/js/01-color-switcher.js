let changeBgInterval = null;

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
  changeBgInterval = setInterval(changeBg, 1000);
  refs.startBtn.setAttribute('disabled', '');
}

function changeBg() {
  const color = getRandomHexColor();
  refs.body.style.backgroundColor = color;
}

function onStopBtnClick() {
  clearInterval(changeBgInterval);
  refs.startBtn.removeAttribute('disabled');
}
