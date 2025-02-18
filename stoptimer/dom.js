let timerInterval;
let elapsedTime = 0; 

const display = document.getElementById('display');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');


function formatTime(milliseconds) {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
  const seconds = String(totalSeconds % 60).padStart(2, '0');
  const millis = String(milliseconds % 1000).padStart(3, '0').slice(0, 2);
  return `${minutes}:${seconds}:${millis}`;
}


function start() {
  const startTime = Date.now() - elapsedTime;

  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    display.textContent = formatTime(elapsedTime);
  }, 10);

  startButton.disabled = true;
  stopButton.disabled = false;
}


function stoptimer() {
  clearInterval(timerInterval);
  startButton.disabled = false;
  stopButton.disabled = true;
}


function reset() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  display.textContent = "00:00:00";
  startButton.disabled = false;
  stopButton.disabled = true;
}


startButton.addEventListener('click', start);
stopButton.addEventListener('click', stoptimer);
resetButton.addEventListener('click', reset);


stopButton.disabled = true;
resetTimer();
