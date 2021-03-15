const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

let isActive = false;
let intervalId = null;

const bodyRef = document.querySelector('body');
const startBtnRef = document.querySelector('button[data-action="start"]');
const stopBtnRef = document.querySelector('button[data-action="stop"]');

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

startBtnRef.addEventListener('click', onStart);

stopBtnRef.addEventListener('click', onStop);

function onStart() {
  if (isActive) return;
  console.log('push start');
  isActive = true;
  intervalId = setInterval(() => {
    const currentColorNum = colors[randomIntegerFromInterval(0, colors.length)];
    bodyRef.style.backgroundColor = currentColorNum;
  }, 1000);
}

function onStop() {
  isActive = false;
  clearInterval(intervalId);
}
