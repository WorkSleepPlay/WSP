$(document).ready(function () {
  var loginForm = $("#log-in-form");

  var emailInput = $("input#email-input");
  var passwordInput = $("input#password-input");
  var ageInput = $("input#age-input");
  var nameInput = $("input#name-input");
  var fullName;
  var emailEntry;
  var age;
  var id;

  loginForm.on("submit", function (event) {
    console.log("submit");
    event.preventDefault();
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim(),
    };

    if (!userData.email || !userData.password) {
      return;
    }
    console.log("userData", userData);
    loginUser(userData.email, userData.password);
    emailInput.val("");
    passwordInput.val("");
  });

  function loginUser(email, password) {
    console.log("log in user");
    $.ajax({
      data: {
        email: email,
        password: password,
        fullName: fullName,
        age: age,
      },
      url: "/api/login",
      type: "POST",
    }).then(function () {
      window.location.replace("/home");
    });
  }
});