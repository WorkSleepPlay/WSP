$(document).ready(function () {
  var fullName;
  var email;
  var age;
  var id;

  profileInfo()

  function profileInfo(userEmail) {
    $.get("/api/user_data/" + userEmail, function (data) {
      if (data) {
        fullName = data.fullName;
        email = data.email;
        age = data.age;
        id = data.id;
      }
    })
  }
  console.log(age);
  console.log(email);
  console.log(fullName);
  console.log(id);
});


//   delete button ID is "delete-button"