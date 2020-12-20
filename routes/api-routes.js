// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");

module.exports = function (app) {

  //SIGNUP ROUTES

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
<<<<<<< HEAD
  app.post("/signup", function (req, res) {
    console.log(req)
=======
  app.post("/api/signup", function (req, res) {
    console.log(res);
>>>>>>> develop
    db.user.create({
        email: req.body.email,
        userPassword: req.body.userPassword,
        fullName: req.body.fullName,
        age: req.body.age
      })
      .then(function (dbUser) {
<<<<<<< HEAD
        res.redirect(307, "api/login");
=======
        res.redirect(307, "/api/login");
>>>>>>> develop
        // do we want them to go to the login after to authenticate? Or go somewhere else
      })
      .catch(function (err) {
        res.status(401).json(err);
      });
  });

  //LOGIN ROUTES

  app.get("/api/login", passport.authenticate("local"), function (req, res) {
    res.json(req.user);
  });

  //LOGOUT ROUTES
  app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  });

  app.get("/api/user", function (req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user,
        userPassword: req.body.userPassword,
        fullName: req.body.fullName,
        age: req.body.age
      });
    }
  });

  // app.post("api/update", function (req, res) {
  //   db.userData.create({
  //       work: req.body.work,
  //       sleep: req.body.sleep,
  //       play: req.body.play,
  //     })
  //     .then(function (dbUser) {
  //       res.redirect(307, "/profile");
  //       // do we want them to go to the login after to authenticate? Or go somewhere else
  //     })
  //     .catch(function (err) {
  //       res.status(401).json(err);
  //     });
  // })
};