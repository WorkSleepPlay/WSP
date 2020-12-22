$(document).ready(function () {
  var fullName;
  var email;
  var age;
  var id;

  profileInfo();
  userData();

  function profileInfo() {
    $.get("/api/user", function (req, res) {
      if (req) {
        fullName = req.body.fullName;
        email = req.body.email;
        age = req.body.age;
        id = req.body.id;
      }
    });
  }

  function userData() {
    $.get("/api/userdata", function (req, res) {
      if (req) {
        work = req.body.work;
        sleep = req.body.sleep;
        play = req.body.play;
      }
    });
  }
});