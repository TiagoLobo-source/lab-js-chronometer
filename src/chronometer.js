class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

    start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      if (printTimeCallback) {
        printTimeCallback();
      }

      this.currentTime++;
    }, 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60) ;
  }

  getSeconds() {
    const seconds = this.currentTime % 60;
    return seconds;
  }


  computeTwoDigitNumber(value) {
    if (value === 0) {
      value = '00';
    } else if (value.toString().length === 1) {
      value = '0' + value;
    }
    return value.toString();
  }
  
  stop() { 
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    return `${minutes}:${seconds}`;
  }
}
