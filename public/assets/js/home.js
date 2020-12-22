$(document).ready(function () {
  $("#b1").on("click", function () {
    event.preventDefault();
    startTimer();
    document.getElementById("b2").setAttribute("disabled", true);
    document.getElementById("b3").setAttribute("disabled", true);
  });
  $("#b2").on("click", function () {
    event.preventDefault();
    startTimer();
    document.getElementById("b1").setAttribute("disabled", true);
    document.getElementById("b3").setAttribute("disabled", true);
  });
  $("#b3").on("click", function () {
    event.preventDefault();
    startTimer();
    document.getElementById("b2").setAttribute("disabled", true);
    document.getElementById("b1").setAttribute("disabled", true);
  });
  $("#b4").on("click", function () {
    event.preventDefault();
    clearInterval(timeHandle);
    document.getElementById("b1").setAttribute("disabled", false);
    document.getElementById("b2").setAttribute("disabled", false);
    document.getElementById("b3").setAttribute("disabled", false);
  });
  var time = 0;
  var maxTime = 86400;
  var timer = document.getElementById("time");

  function setTime(seconds) {
    time = seconds;
    timer.textContent = "Time Elapsed: " + time;
  }

  function startTimer() {
    clearInterval(timeHandle);
    setTime(maxTime);
    timeHandle = setInterval(function () {
      setTime(time + 1);
      if (time > maxTime) {
        clearInterval(timeHandle);
      } else {
        console.log("whatever");
      }
    }, 1000);
  }
});