
            
const clock = document.querySelector('.clock');
const body = document.querySelector('body');
const timeShow = document.querySelector('.timeShow');
const stop = document.querySelector('#clstop');
clock.style.display = 'flex';
timeShow.style.display = 'flex';
let timerID;

const timer = () => {
  const time = new Date();
  let hours = pad(time.getHours());

  let minutes = pad(time.getMinutes());

  let seconds = pad(time.getSeconds());

  timeShow.innerHTML = `<p class="hours">${hours}:</p><p class="minutes">${minutes}:</p><p class="seconds">${seconds}</p>`;
};

const start = document.querySelector('#clstart');
start.addEventListener('click', () => {
  timerID = setInterval(timer, 1000);
  timer();
});

stop.addEventListener('click', () => {
  clearInterval(timerID);
});

function pad(value) {
  return String(value).padStart(2, '0');
}