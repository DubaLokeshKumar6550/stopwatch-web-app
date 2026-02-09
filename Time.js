let timer = null;
let startTime = 0;
let elapsedTime = 0;
let running = false;

function startStop() {
  if (!running) {
    startTime = Date.now() - elapsedTime;
    timer = setInterval(updateTime, 10);
    running = true;
  } else {
    clearInterval(timer);
    elapsedTime = Date.now() - startTime;
    running = false;
  }
}

function reset() {
  clearInterval(timer);
  running = false;
  elapsedTime = 0;
  document.getElementById("display").textContent = "00:00:00";
}

function updateTime() {
  elapsedTime = Date.now() - startTime;

  let totalSeconds = Math.floor(elapsedTime / 1000);
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;
  let milliseconds = Math.floor((elapsedTime % 1000) / 10);

  document.getElementById("display").textContent =
    String(minutes).padStart(2, "0") + ":" +
    String(seconds).padStart(2, "0") + ":" +
    String(milliseconds).padStart(2, "0");
}
