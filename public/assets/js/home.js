// on ready require npm package, create timer, bring in time from home.handlebars
$(document).ready(function () {
  const time = document.getElementById("time");

  const Timer = require("time-counter"),
    newTime = console.log.bind(console);

  const countUpTimer = new Timer({
    direction: "up",
    startValue: 0,
    interval: 50,
  });
  countUpTimer.on("change", newTime);

  $("#b1").on("click", function () {
    countUpTimer.start();
  });
  $("#b2").on("click", function () {
    countUpTimer.start();
  });
  $("#b2").on("click", function () {
    countUpTimer.start();
  });
});
