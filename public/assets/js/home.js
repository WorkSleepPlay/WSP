// on ready require npm package, create timer, bring in time from home.handlebars, log time
$(document).ready(function () {

  let timeHandle;

  // const time = document.getElementById("time");

  // const Timer = require("time-counter"),
  //   log = function (console) {
  //     console.log.bind(console);
  //   };
  // // creating and calling timer on appropriate button clicks
  // const countUpTimer = new Timer({
  //   direction: "up",
  //   startValue: 0,
  //   interval: 50,
  // });
  // countUpTimer.on("change", log);
  // // function to add time to html
  // function timeLeft() {
  //   time.textContent = "Time Elapsed: " + log;
  // }

  // On Click Functions For Work Sleep Play
  $("#work-button").on("click", function (event) {
    event.preventDefault();
    startTimer();
    document.getElementById("sleep-button").setAttribute("disabled", true);
    document.getElementById("play-button").setAttribute("disabled", true);
  });
  $("#sleep-button").on("click", function (event) {
    event.preventDefault();
    startTimer();
    document.getElementById("work-button").setAttribute("disabled", true);
    document.getElementById("play-button").setAttribute("disabled", true);
  });
  $("#play-button").on("click", function (event) {
    event.preventDefault();
    startTimer();
    document.getElementById("sleep-button").setAttribute("disabled", true);
    document.getElementById("work-button").setAttribute("disabled", true);
  });

  // STOP BUTTON
  $("#stop-button").on("click", function (event) {
    event.preventDefault();
    clearInterval(timeHandle);
    document.getElementById("work-button").removeAttribute("disabled");
    document.getElementById("sleep-button").removeAttribute("disabled");
    document.getElementById("play-button").removeAttribute("disabled");
  });

  //Timer
  var time = 0;
  var maxTime = 86400;
  var timer = document.getElementById("time");

  function setTime() {
    time++;
    timer.textContent = "Time Elapsed: " + time;
  }

  function startTimer() {
    // clearInterval(timeHandle);
    setTime();
    timeHandle = setInterval(function () {
      setTime();
      if (time > maxTime) {
        clearInterval(timeHandle);
      } else {
        console.log("whatever");
      }
    }, 1000);
  }
});