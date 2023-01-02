const { clear } = require("console");

const waitTime = 5000;
const waitInterval = 500;
let currentTime = 0;

const incTime = () => {
  currentTime += waitInterval;
  const p = Math.floor((currentTime / waitTime) * 100);
  process.stdout.write(` | waiting ... ${p}%`);
};

incTime();

console.log(`setting a ${waitTime / 1000} second delay`);

const timerFinished = () => {
  console.log("done");
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  clearInterval(interval);
};

const interval = setInterval(incTime, waitInterval);
setTimeout(timerFinished, waitTime);

// Compare this snippet from Exercises\ch03\03_01\finished\firstFile.js:
