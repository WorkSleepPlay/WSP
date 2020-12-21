$(document).ready(function () {
  // Getting references to our form and input
  var signUpForm = $("#form-signup");
  var emailInput = $("#email");
  var passwordInput = $("#userPassword");
  var age = $("#age");
  var fullName = $("#fullName");

  console.log("anything");
  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", function (event) {
    event.preventDefault();
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim(),
      age: age.val().trim(),
      fullName: fullName.val().trim()
    };
    console.log(userData);

    if (!userData.email || !userData.password) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(userData.email, userData.password, userData.fullName, userData.age);
    emailInput.val("");
    passwordInput.val("");
    fullName.val("");
    age.val("");
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(email, password, fullName, age) {
    $.ajax({
      data: {
        email: email,
        password: password,
        fullName: fullName,
        age: age
      },
      url: "/api/signup",
      type: "POST",
    });
    window.location.replace("/login");
  };
  //   .then(function (data) {

  //       // If there's an error, handle it by throwing up a bootstrap alert
  //       // we dont have a members page...need to change to login? where are we redirecting them to 
  //     })
  //     .catch(handleLoginErr);
  // }

  function handleLoginErr(err) {
    $("#alert.msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});