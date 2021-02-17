
const refs = {
    days: document.querySelector('span[data-value="days"]'),
    hours: document.querySelector('span[data-value="hours"]'),
    mins: document.querySelector('span[data-value="mins"]'),
    secs: document.querySelector('span[data-value="secs"]'),
  };
  
const targetDate = new Date('Feb 23, 2021'); 
const timer = {
    intervalId: null, 
    start() {
      updateClock(); 
  
      this.intervalId = setInterval(() => {
        updateClock();
      }, 1000);
    },
  };

  timer.start();
  
  
function updateClock() {
const currentDate = Date.now(); 
const time = targetDate - currentDate;
 if (time <= 0) {
      console.log('clear');
      clearInterval(this.intervalId);
      this.intervalId = null;
      setTime(0);
  return;
  }
 setTime(time);
}
 
function pad(value) {
    return String(value).padStart(2, '0');
}
  
function newClockNumber (days, hours, mins, secs) {

  refs.days.textContent = `${days}`;
  refs.hours.textContent = `${hours}`;
  refs.mins.textContent = `${mins}`;
  refs.secs.textContent = `${secs}`;
}

  
function setTime(time) {
const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
newClockNumber (days, hours, mins, secs);
}
