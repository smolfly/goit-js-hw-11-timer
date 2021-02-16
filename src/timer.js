
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
    // console.log(currentDate);
const time = targetDate - currentDate;
    // console.log(time);
setTime(time);
  
    
if (time <= 0) {
      console.log('clear');
      clearInterval(this.intervalId);
      this.intervalId = null;
      setTime(0);
    }
}
 
function pad(value) {
    return String(value).padStart(2, '0');
}
  
  
function setTime(time) {
    // оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
    const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  
    //   оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора остатка % и делим его на количество миллисекунд в одном часе (1000 * 60 * 60 = миллисекунды * минуты * секунды)
    const hours = pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
  
    //  оставшиеся минуты: получаем оставшиеся минуты и делим их на количество миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  
    //  оставшиеся секунды: получаем оставшиеся секунды и делим их на количество миллисекунд в одной секунде (1000)
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
  
    refs.days.textContent = `${days}`;
    refs.hours.textContent = `${hours}`;
    refs.mins.textContent = `${mins}`;
    refs.secs.textContent = `${secs}`;
}