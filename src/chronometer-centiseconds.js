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

      this.currentTime=this.currentTime+1;
    }, 10);
    
  }

  getMinutes() {
    if (this.currentTime === 0) {
      return 0;
    }
    return Math.floor(this.currentTime /6000);
  }
  

  getSeconds() {
    if (this.currentTime === 0) {
      return 0;
    }
    const seconds = Math.floor(this.currentTime / 100) % 60;
    return seconds;
  }

  getCentiseconds() {
    return this.currentTime % 100;
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
    const centiseconds = this.computeTwoDigitNumber(this.getCentiseconds());
    return `${minutes}:${seconds}.${centiseconds}`;
  }
}
