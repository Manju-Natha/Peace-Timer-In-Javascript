let twentySecondsBtnEl = document.getElementById("twentySecondsBtn");
let thirtySecondsBtnEl = document.getElementById("thirtySecondsBtn");
let fortySecondsBtnEl = document.getElementById("fortySecondsBtn");
let oneMinuteBtnEl = document.getElementById("oneMinuteBtn");
let timerTextEl = document.getElementById("timerText");

let secoundLeft = 0;
let textContainerValue = "Your momoent Completed";
let timerId;

function clearDisplay() {
  clearInterval(timerId);
}

twentySecondsBtnEl.onclick = function () {
  secoundLeft = 20;
  clearDisplay();
  startTimerDisplay();
};

thirtySecondsBtnEl.onclick = function () {
  secoundLeft = 30;
  clearDisplay();
  startTimerDisplay();
};

fortySecondsBtnEl.onclick = function () {
  secoundLeft = 40;
  clearDisplay();
  startTimerDisplay();
};

oneMinuteBtnEl.onclick = function () {
  secoundLeft = 60;
  clearDisplay();
  startTimerDisplay();
};

function startTimerDisplay() {
  timerTextEl.textContent = secoundLeft + "Secound Left";
  timerId = setInterval(startTimer, 1000);
}

function startTimer() {
  if (secoundLeft > 1) {
    secoundLeft = secoundLeft - 1;
    timerTextEl.textContent = secoundLeft + "Secound Left";
  } else {
    clearInterval(timerId);
    timerTextEl.textContent = textContainerValue;
  }
}
