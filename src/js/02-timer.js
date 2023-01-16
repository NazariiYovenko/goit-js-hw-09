import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

let timer = null;
let selectedDate = null;

const refs = {
  datetimePicker: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('button[data-start]'),
  timer: {
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]'),
  },
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedDate = selectedDates[0];
    if (selectedDates[0] < new Date()) {
      Notiflix.Notify.warning('Please choose a date in the future');
      refs.startBtn.setAttribute('disabled', '');
      return;
    }
    refs.startBtn.removeAttribute('disabled');
  },
};

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
} // {days: D, hours: H, minutes: M, seconds: S}

function addLeadingZero({ days, hours, minutes, seconds }) {
  return {
    days: String(days).padStart(2, '0'),
    hours: String(hours).padStart(2, '0'),
    minutes: String(minutes).padStart(2, '0'),
    seconds: String(seconds).padStart(2, '0'),
  };
} // {days: 0D, hours: 0H, minutes: 0M, seconds: 0S}

function changeTimer({ days, hours, minutes, seconds }) {
  refs.timer.days.textContent = days;
  refs.timer.hours.textContent = hours;
  refs.timer.minutes.textContent = minutes;
  refs.timer.seconds.textContent = seconds;
}

function startTimer() {
  timer = setInterval(
    () => changeTimer(addLeadingZero(convertMs(selectedDate - new Date()))),
    1000
  );
  refs.startBtn.setAttribute('disabled', '');
}

flatpickr(refs.datetimePicker, options);

refs.startBtn.setAttribute('disabled', '');

refs.startBtn.addEventListener('click', startTimer);
