$(document).ready(function () {
  var fullName;
  var email;
  var age;
  var id;

  profileInfo();

  console.log(window.location.href.split("=")[1]);
  function profileInfo() {
    $.get("/api/user", function (req, res) {
      if (req) {
        fullName = req.user.fullName;
        email = res.user.email;
        age = res.user.age;
        id = req.user.id;
      }
    });
  }
});

//   delete button ID is "delete-button"

// Retrieve the template data from the HTML (jQuery is used here).
// var template = $("/profile.handlebars").html();

// // Compile the template data into a function
// var templateScript = Handlebars.compile(template);

// var newID = {
//   fullMame: "fullName",
//   email: "email",
//   age: "age",
// };
// Send the POST request.
// $.ajax("/api/profile", {
//   type: "POST",
//   data: newID
// }).then(
//   function() {
//     console.log("user info");
// Reload the page to get the updated list
//     location.reload();
//   }
// );
// var html = templateScript(context);

// Insert the HTML code into the page
// $(document.body).append(html);
