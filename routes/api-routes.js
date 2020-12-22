const db = require("../models");
const passport = require("../config/passport");
const isAuthenticated = require("../config/middleware/isAuthenticated")

module.exports = function (app) {

  //LOGIN API ROUTES
  app.post("/api/login", passport.authenticate("local"), function (req, res) {
    res.json(req.user);
  });

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
        res.status(401).json(err);
        console.log(err);
      });
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

  app.get("/api/user", function (req, res) {
    var userObject = {};
    if (req.userObject.user_id) {
      userObject.UserId = req.userObject.user_id;
    }
    db.Present.findAll({
      where: userObject,
    }).then(function (dbPresent) {
      res.json(dbPresent);
    });
  });

  // USERDATA TABLE API ROUTES
  app.post("/api/profile", isAuthenticated, function (req, res) {
    db.userData.create({
        work: req.body.work,
        sleep: req.body.sleep,
        play: req.body.play,
      })
      .then(function () {
        res.redirect("/profile");
      });
  });

  app.get("/api/profile:id", function (req, res) {
    db.userData.findOne({
      where: {
        id: req.params.id
      },
      include: [db.user]
    }).then(function (dbUserData) {
      console.log(dbUserData);
      res.json(dbUserData);
    });
  });

  app.put("/api/profile", isAuthenticated, function (req, res) {
    db.userData.update(req.body, {
      where: {
        id: req.body.id,
      },
    }).then(function (dbUserData) {
      res.json(dbUserData);
    });
  });
};