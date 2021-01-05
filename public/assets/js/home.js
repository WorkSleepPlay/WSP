$(document).ready(function () {
  let timeHandle;
  var time = 0;
  var maxTime = 86400;
  var timer = document.getElementById("time");

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
    clearInterval(timeHandle);
    time = 0;
    document.getElementById("b1").removeAttribute("disabled");
    document.getElementById("b2").removeAttribute("disabled");
    document.getElementById("b3").removeAttribute("disabled");
    console.log("in the stop click");
  });

  //Timer
  function setTime() {
    time++;
    timer.textContent = "Time Elapsed: " + time;
  };

  function startTimer() {
    timeHandle = setInterval(function () {
      setTime();
      if (time > maxTime) {
        clearInterval(timeHandle);
      };
    }, 1000);
  }
});