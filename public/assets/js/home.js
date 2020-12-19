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
  });
  $("#b2").on("click", function () {
    countUpTimer.start(timeLeft);
  });
  $("#b2").on("click", function () {
    countUpTimer.start(timeLeft);
  });
  $("#b2").on("click", function () {
    countUpTimer.stop(timeLeft);
  });
});
