$(document).ready(function () {
  var b1Work = $("#b1");
  var b2Sleep = $("#b2");
  var b3Play = $("#b3");
  var b4Stop = $("#b4");
  var fullName;
  var email;
  var age;
  var id;

  profileInfo();
  createData();
  userData();

  function profileInfo() {
    $.get("/api/user", function (req, res) {
      // console.log(req);
      if (req) {
        fullName = req.fullName;
        email = req.email;
        age = req.age;
        id = req.id;
      }
    });
  }

  // function userData() {
  //   $.get("/api/userdata", function (req, res) {
  //     if (req) {
  //       work = req.body.work;
  //       sleep = req.body.sleep;
  //       play = req.body.play;
  //     }
  //   });
  // };

  // Getting references to our form and input

  // When the signup button is clicked, we validate the email and password are not blank
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
        work: "2020-12-22 21:21:04",
        sleep: "2020-12-22 21:21:04",
        play: "2020-12-22 21:21:04"
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
// function createData() {
//   $.post("/api/createdata", function (req, res) {
//     if (req) {
//       work = req.body.work;
//       sleep = req.body.sleep;
//       play = req.body.play;
//     }
//   });
// }

