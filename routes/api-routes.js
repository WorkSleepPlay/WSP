// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");

module.exports = function (app) {

  //SIGNUP ROUTES

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function (req, res) {
    db.user.create({
        email: req.body.email,
        userPassword: req.body.userPassword,
        fullName: req.body.fullName,
        age: req.body.age
      })
      .then(function () {
        res.redirect(307, "/login");
      })
      .catch(function (err) {
        res.status(401).json(err);
      });
  });

  //LOGIN ROUTES

  app.get("/api/user", passport.authenticate("local"), function (req, res) {
    res.json(req.user);
  });

  //LOGOUT ROUTES
  app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  });

  app.post("api/update", function (req, res) {
    db.userData.create({
      work: req.body.work,
      sleep: req.body.sleep,
      play: req.body.play,
    })
  })
};