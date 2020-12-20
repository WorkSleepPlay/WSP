// on ready require npm package, create timer, bring in time from home.handlebars, log time
$(document).ready(function () {
  const time = document.getElementById("time");

  const Timer = require("time-counter"),
    log = function (console) {
      console.log.bind(console);
    };
  // creating and calling timer on appropriate button clicks
  const countUpTimer = new Timer({
    direction: "up",
    startValue: 0,
    interval: 50,
  });
  countUpTimer.on("change", log);
  // function to add time to html
  function timeLeft() {
    time.textContent = "Time Elapsed: " + log;
  }
  // on clicks
  $("#b1").on("click", function () {
    countUpTimer.start(timeLeft);
    //select element by id to disable other buttons
    document.getElementById("b2").setAttribute("disabled", true);
    document.getElementById("b3").setAttribute("disabled", true);
  });
  $("#b2").on("click", function () {
    countUpTimer.start(timeLeft);
    document.getElementById("b1").setAttribute("disabled", true);
    document.getElementById("b3").setAttribute("disabled", true);
  });
  $("#b3").on("click", function () {
    countUpTimer.start(timeLeft);
    document.getElementById("b2").setAttribute("disabled", true);
    document.getElementById("b1").setAttribute("disabled", true);
  });
  $("#b4").on("click", function () {
    countUpTimer.stop(timeLeft);
    document.getElementById("b1").setAttribute("disabled", false);
    document.getElementById("b2").setAttribute("disabled", false);
    document.getElementById("b3").setAttribute("disabled", false);
  });

  // SELMA STUFF
  document.getElementById("app").innerHTML = `
<div class="base-timer">
  <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g class="base-timer__circle">
      <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
    </g>
  </svg>
  <span id="base-timer-label" class="base-timer__label">
    ${formatTime(timeLeft)}
  </span>
</div>
`

  function formatTimeLeft(time) {
    // The largest round integer less than or equal to the result of time divided being by 60.
    const minutes = Math.floor(time / 60);

    // Seconds are the remainder of the time divided by 60 (modulus operator)
    let seconds = time % 60;

    // If the value of seconds is less than 10, then display seconds with a leading zero
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }

    // The output in MM:SS format
    return `${minutes}:${seconds}`;
  }

  // Start with an initial value of 20 seconds
  const TIME_LIMIT = 20;

  // Initially, no time has passed, but this will count up
  // and subtract from the TIME_LIMIT
  let timePassed = 0;
  let timeLeft = TIME_LIMIT;

  let timerInterval = null;

  document.getElementById("app").innerHTML = `...`

  function startTimer() {
    timerInterval = setInterval(() => {

      // The amount of time passed increments by one
      timePassed = timePassed += 1;
      timeLeft = TIME_LIMIT - timePassed;

      // The time left label is updated
      document.getElementById("base-timer-label").innerHTML = formatTime(timeLeft);
    }, 1000);
  }

  document.getElementById("app").innerHTML = `...`
  startTimer();
});