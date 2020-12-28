// on ready require npm package, create timer, bring in time from home.handlebars, log time
$(document).ready(function () {
  let timeHandle;
  var time = 0;
  var maxTime = 86400;
  var timer = document.getElementById("time");
  var b1Work = $("#b1");
  var b2Sleep = $("#b2");
  var b3Play = $("#b3");
  var b4Stop = $("#b4");
  var timerData = {};

  function setDisabled(button, isDisabled) {
    if (isDisabled) {
      button.setAttribute("disabled", true);
    } else {
      button.removeAttribute("disabled");
    }
  }

  // On Click Functions For Work Sleep Play
  $("#b1").on("click", function (event) {
    event.preventDefault();
    startTimer();
    addStopListener("work");
    setDisabled(document.getElementById("b2"), true)
    setDisabled(document.getElementById("b3"), true)
  });
  $("#b2").on("click", function (event) {
    event.preventDefault();
    startTimer();
    addStopListener("sleep");
    setDisabled(document.getElementById("b1"), true)
    setDisabled(document.getElementById("b3"), true)
  });
  $("#b3").on("click", function (event) {
    event.preventDefault();
    startTimer();
    addStopListener("play");
    setDisabled(document.getElementById("b1"), true)
    setDisabled(document.getElementById("b2"), true)
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

  function addStopListener(action) {
    const startTime = new Date();
    const stopListener = function (event) {
      event.preventDefault();
      clearInterval(timeHandle);
      console.log(action, time);
      timerData[action] = time;
      $.post("/api/createdata", {
          actionType: action,
          startTime,
          duration: time
        })
        .then(function (data) {
          // window.location.replace("/home");
        })
      // .catch(handleLoginErr);
      //grab the time (through a function so it knows it whether it's work sleep or play)
      time = 0;
      setDisabled(document.getElementById("b1"), timerData.work != null)
      setDisabled(document.getElementById("b2"), timerData.sleep != null)
      setDisabled(document.getElementById("b3"), timerData.play != null)
      console.log("in the stop click");
      $("#b4").off("click", stopListener);
    }
    $("#b4").on("click", stopListener);
  }


  //Getting on click of timer to write to db

  b1Work.on("click", function (event) {
    event.preventDefault();
    var clicks = $(this.data('clicks'));
    if (clicks === (2, 4, 6)) {
      createData();
    };

    var data = {
      work: b1Work.val().trim(),
      sleep: b2Sleep.val().trim(),
      play: b3Play.val().trim(),
    };
    console.log(data)

    // if (!data.email || !data.password) {
    //   return;
    // }
    // If we have an email and password, run the signUpUser function
    createData(data.work, data.sleep, data.play);
    b1Work.val("");
    b2Sleep.val("");
    b3Play.val("");
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function createData(work, sleep, play) {
    $.post("/api/createdata", {
        work: work,
        sleep: sleep,
        play: play
      })
      .then(function (data) {
        // window.location.replace("/home");
      })
      .catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert.msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});