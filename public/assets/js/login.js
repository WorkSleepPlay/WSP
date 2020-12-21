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
    console.log("submit")
    event.preventDefault();
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.email || !userData.password) {
      return;
    }
    console.log("userData", userData)
    // If we have an email and password we run the loginUser function and clear the form
    loginUser(userData.email, userData.password);
    emailInput.val("");
    passwordInput.val("");
  });

  // loginUser does a post to our "api/login" route and if successful, redirects us the the profile page
  function loginUser(email, password) {
    console.log("log in user")
    $.post("/api/login", {
      email: email,
      password: password,
    })
      .then(function () {
        console.log("success login")
        // $.get("/api/user_data/" + emailInput, function (data) {
        //   console.log(data);
        //   if (data) {
        //     fullName = data.fullName;
        //     emailEntry = data.email;
        //     age = data.age;
        //     id = data.id;
        //   }
        // })
        window.location.replace("/profile");
        // If there's an error, log the error
      })
      .catch(function (err) {
        console.log("log in error", err);
      });
  }
});
