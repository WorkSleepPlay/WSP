const db = require("../models");
const passport = require("../config/passport");
const isAuthenticated = require("../config/middleware/isAuthenticated")

module.exports = function (app) {
  // SIGNUP API ROUTES
  app.post("/api/signup", function (req, res) {
    db.user
      .create({
        email: req.body.email,
        password: req.body.password,
        fullName: req.body.fullName,
        age: req.body.age,
      })
      .then(function () {
        res.redirect(307, "/api/login");
      })
      .catch(function (err) {
        console.error("sign up error", err);
        res.json(err);
      });
  });

  //LOGIN API ROUTES
  app.post("/api/login", passport.authenticate("local"), function (req, res) {
    req.session.email = req.user.email;
    console.log("I am in api/log");
    res.json(req.user);
    // res.render("home");
  });

  //LOGOUT API ROUTES
  app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  });

  //USER API ROUTES
  app.get("/api/user/:id", function (req, res) {
    db.user
      .findOne({
        where: {
          id: req.params.id,
        },
        include: [db.userData],
      })
      .then(function (dbUser) {
        res.render("profile", dbUser);
        res.json(dbUser);
      });
  });

  //USERDATA TABLE API ROUTES
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