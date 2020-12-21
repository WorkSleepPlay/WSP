$(document).ready(function () {
  var fullName;
  var email;
  var age;
  var id;

  profileInfo()

  console.log(window.location.href.split("=")[1]);
  function profileInfo() {
    $.get(`/api/user/${window.location.href.split("=")[1]}`, function (req,res) {
      console.log("event", req);
      if (req) {
        fullName = req.user.fullName;
        email = res.user.email;
        age = res.user.age;
        id = req.user.id;
      }
    })
  }
});
