$(document).ready(function () {

  var fullName;
  var email;
  var age;
  var id;

  profileInfo();
  // createData();
  // userData();

  function profileInfo() {
    $.get("/api/user", function (req, res) {
      console.log(req);
      if (req) {
        fullName = req.fullName;
        email = req.email;
        age = req.age;
        id = req.id;
        createdAt = req.createdAt
      }
    }).then(function (dbUser) {
      $.get("/api/user/" + id, function (req, res) {
        console.log(res);
      })
    });

  };
});

// function userData() {
//   $.get("/api/userdata", function (req, res) {
//     if (req) {
//       work = req.body.work;
//       sleep = req.body.sleep;
//       play = req.body.play;
//     }
//   });
// };

// Getting references to our form and input

// When the signup button is clicked, we validate the email and password are not blank

// });
// function createData() {
//   $.post("/api/createdata", function (req, res) {
//     if (req) {
//       work = req.body.work;
//       sleep = req.body.sleep;
//       play = req.body.play;
//     }
//   });
// }