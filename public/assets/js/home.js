// on ready require npm package, create timer, bring in time from home.handlebars, log time
$(document).ready(function () {
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
  $("#b1").on("click", function (event) {
    event.preventDefault();
    startTimer();
    document.getElementById("b2").setAttribute("disabled", true);
    document.getElementById("b3").setAttribute("disabled", true);
  });
  $("#b2").on("click", function (event) {
    event.preventDefault();
    startTimer();
    document.getElementById("b1").setAttribute("disabled", true);
    document.getElementById("b3").setAttribute("disabled", true);
  });
  $("#b3").on("click", function (event) {
    event.preventDefault();
    startTimer();
    document.getElementById("b2").setAttribute("disabled", true);
    document.getElementById("b1").setAttribute("disabled", true);
  });
  $("#b4").on("click", function (event) {
    event.preventDefault();
    // clearInterval(timeHandle);
    document.getElementById("b1").setAttribute("disabled", false);
    document.getElementById("b2").setAttribute("disabled", false);
    document.getElementById("b3").setAttribute("disabled", false);
  });

  //Timer
  //   var time = 0;
  //   var maxTime = 86400;
  //   var timer = document.getElementById("time");

  //   function setTime(seconds) {
  //     time = seconds;
  //     timer.textContent = "Time Elapsed: " + time;
  //   }

  //   function startTimer() {
  //     clearInterval(timeHandle);
  //     setTime(maxTime);
  //     timeHandle = setInterval(function () {
  //       setTime(time + 1);
  //       if (time > maxTime) {
  //         clearInterval(timeHandle);
  //       } else {
  //         console.log("whatever");
  //       }
  //     }, 1000);
  //   }
  // });

  function startTimer() {
    var startTimestamp = moment().startOf("day");
    setInterval(function () {
      startTimestamp.add(1, 'second');
      document.getElementById('time').innerHTML =
        startTimestamp.format('HH:mm:ss');
    }, 1000);
  };
});