// Добавляем ДОМ элементы
const refs = {
  daysEl: document.querySelector('[data-value="days"]'),
  hoursEl: document.querySelector('[data-value="hours"]'),
  minsEl: document.querySelector('[data-value="mins"]'),
  secsEl: document.querySelector('[data-value="secs"]')
}

// Класс Таймера обратного отсчета
class CountdownTimer{
  constructor({ targetDate, selector, onTick }) {
    this.targetDate = targetDate;
    this.selector = selector;
    this.onTick = onTick;
  }

  start(){
  setInterval(() => {
    const targetTime = this.targetDate.getTime();
    const currentTime = Date.now();
    const remainingTime = targetTime - currentTime;
    const time = this.getTimeComponents(remainingTime);
    console.log(time);
        this.onTick(time);  

    
}, 1000);
  }

  getTimeComponents(time) {
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((time % (1000 * 60)) / 1000);

      return { days, hours, mins, secs };
    }
}

//создаем новый таймер
const countDownTimer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Nov 17, 2020'),
  onTick: updateClockFace
});

countDownTimer.start();

//функция отрисовки интерфейса
function updateClockFace({ days, hours, mins, secs }) {
  refs.daysEl.textContent = days;
  refs.hoursEl.textContent = hours;
  refs.minsEl.textContent = mins;
  refs.secsEl.textContent = secs;
}

