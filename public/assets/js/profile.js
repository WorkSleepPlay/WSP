$(document).ready(function() {
    // Getting references to our time logged in the db per activity
    var loginForm = $("form.login");
    var emailInput = $("input#email-input");
    var passwordInput = $("input#password-input");
  
    // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
    function loginUser(email, password) {
      $.post("/api/login", {
        email: email,
        password: password
      })
        .then(function() {
          window.location.replace("/members");
          // If there's an error, log the error
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  });