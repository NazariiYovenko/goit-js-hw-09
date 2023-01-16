import Notiflix from 'notiflix';

const formEl = document.querySelector('.form');

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function onFormSubmit(event) {
  event.preventDefault();

  const {
    elements: { delay, step, amount },
  } = event.currentTarget;

  currentDelay = Number(delay.value);

  for (let index = 1; index < Number(amount.value) + 1; index++) {
    createPromise(index, currentDelay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
    currentDelay += Number(step.value);
  }
}

formEl.addEventListener('submit', onFormSubmit);
