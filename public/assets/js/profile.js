$(document).ready(function () {
  var fullName;
  var email;
  var age;
  var id;

  profileInfo()

  function profileInfo() {
    $.get("/api/user", function (req,res) {
      if (req) {
        fullName = req.user.fullName;
        email = res.user.email;
        age = res.user.age;
        id = req.user.id;
      }
    })
  }
});
