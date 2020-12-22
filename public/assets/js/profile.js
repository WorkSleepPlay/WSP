$(document).ready(function () {
  var fullName;
  var email;
  var age;
  var id;

  profileInfo();

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
  console.log(age);
  console.log(email);
  console.log(fullName);
  console.log(id);
});
