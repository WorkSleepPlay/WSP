$(document).ready(function () {
  // Getting references to our form and inputs
  var loginForm = $("#log-in-form");

  var emailInput = $("input#email-input");
  var passwordInput = $("input#password-input");
  var ageInput = $("input#age-input");
  var nameInput = $("input#name-input");
  var fullName;
  var emailEntry;
  var age;
  var id;

  // When the form is submitted, we validate there's an email and password entered
  loginForm.on("submit", function (event) {
    event.preventDefault();
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim(),
    };

    if (!userData.email || !userData.password) {
      return;
    }
    // If we have an email and password we run the loginUser function and clear the form
    loginUser(userData.email, userData.password);
    emailInput.val("");
    passwordInput.val("");
  });

  // loginUser does a post to our "api/login" route and if successful, redirects us the the profile page
  function loginUser(email, password) {
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