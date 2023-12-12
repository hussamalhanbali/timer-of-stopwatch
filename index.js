// Onload
window.onload = function () {
  let milliseconds = 0;
  let seconds = 0;
  let minutes = 0;
  let hour = 0;
  let interval;
  let isTimerRunning = false;

  const millisecondsDisplay = document.getElementById("milliseconds");
  const secondsDisplay = document.getElementById("seconds");
  const minutesDisplay = document.getElementById("minutes");
  const hourDisplay = document.getElementById("hour");
  const buttonStart = document.getElementById("button-start");
  const buttonStop = document.getElementById("button-stop");
  const buttonRestart = document.getElementById("button-restart");

  function incrementClock() {
    console.log();
    milliseconds++;

    if (milliseconds <= 9) {
      millisecondsDisplay.inneHTML = "0" + milliseconds;
    }
    if (milliseconds > 9) {
      millisecondsDisplay.innerHTML = milliseconds;
    }
    if (milliseconds > 99) {
      seconds++;
      secondsDisplay.innerHTML = "0" + seconds;
      milliseconds = 0;
      millisecondsDisplay.innerHTML = "00";
    }
    if (seconds > 9) {
      secondsDisplay.innerHTML = seconds;
    }
    if (seconds <= 9) {
      secondsDisplay.innerHTML = "0" + seconds;
    }
    if (seconds > 59) {
      minutes++;
      minutesDisplay.innerHTML = "0" + minutes;
      seconds = 0;
      secondsDisplay.innerHTML = "00";
    }
    if (minutes > 9) {
      minutesDisplay.innerHTML = minutes;
    }
    if (minutes <= 9) {
      minutesDisplay.innerHTML = "0" + minutes;
    }
    if (minutes > 59) {
      hour++;
      hourDisplay.innerHTML = "0" + hour;
      minutes = 0;
      minutesDisplay.innerHTML = "00";
    }
    if (hour <= 9) {
      hourDisplay.innerHTML = "0" + hour;
    }
    if (hour > 9) {
      hourDisplay.inneHTML = hour;
    }
    if (hour > 24) {
      hour = 0;
      hourDisplay.innerHTML = "00";
    }
  }

  function start() {
    console.log("start");
    if (isTimerRunning) {
      return;
    }
    isTimerRunning = true;
    const millisecondsPerInterval = 10;
    interval = setInterval(incrementClock, millisecondsPerInterval);
  }
  function stop() {
    console.log("stop");
    isTimerRunning = false;
    clearInterval(interval);
  }
  function restart() {
    console.log("restart");
    isTimerRunning = false;
    clearInterval(interval);
    millisecondsDisplay.innerHTML = "00";
    secondsDisplay.innerHTML = "00";
    minutesDisplay.innerHTML = "00";
    hourDisplay.inneHTML = "00";
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    hour = 0;
  }

  // Onclick
  buttonStart.onclick = start;
  buttonStop.onclick = stop;
  buttonRestart.onclick = restart;
};
