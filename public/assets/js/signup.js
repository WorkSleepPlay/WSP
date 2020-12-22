$(document).ready(function () {
  var signUpForm = $("#form.signup");
  var emailInput = $("#email");
  var passwordInput = $("#userPassword");
  var age = $("#age");
  var fullName = $("#fullName");

  signUpForm.on("submit", function (event) {
    event.preventDefault();
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim(),
      fullName: fullName.val().trim(),
      age: age.val().trim()
    };
    console.log(userData)

    if (!userData.email || !userData.password) {
    return;
    }
    signUpUser(userData.email, userData.password, userData.fullName, userData.age);
    emailInput.val("");
    passwordInput.val("");
    fullName.val("");
    age.val("");
  });

  function signUpUser(email, password, fullName, age) {
    $.post("/api/signup", {
        email: email,
        password: password,
        fullName: fullName,
        age: age
      })
      .then(function (data) {
        window.location.replace("/profile");
      })
      .catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert.msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
