$(document).ready(function () {
  // Getting references to our form and input
  var signUpForm = $("#formsignup");
  var emailInput = $("#email");
  var passwordInput = $("#userPassword");
  var age = $("#age");
  var fullName = $("#fullName");

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", function (event) {
    event.preventDefault();

    var userData = {
      email: emailInput.val().trim(),
      userPassword: passwordInput.val().trim(),
      fullName: fullName.val().trim(),
      age: age.val().trim()
    };
    console.log(userData)

    // if (!userData.email || !userData.password) {
    // return;
    // }
    // If we have an email and password, run the signUpUser function
    signUpUser(userData.email, userData.userPassword, userData.fullName, userData.age);
    emailInput.val("");
    passwordInput.val("");
    fullName.val("");
    age.val("");
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(email, password, fullName, age) {
    $.post("/api/signup", {
        email: email,
        userPassword: password,
        fullName: fullName,
        age: age
      })
      .then(function (data) {
        window.location.replace("/login");
        // If there's an error, handle it by throwing up a bootstrap alert
        // we dont have a members page...need to change to login? where are we redirecting them to 
      })
      // .catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert.msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});

$(function () {
  var showClass = 'show';
  $('input').on('checkval', function () {
    var label = $(this).prev('label');
    if(this.value !== '') {
      label.addClass(showClass);
    } else {
      label.removeClass(showClass);
    }
  }).on('keyup', function () {
    $(this).trigger('checkval');
  });
});
