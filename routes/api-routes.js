var db = require("../models");
var passport = require("../config/passport");

module.exports = function (app) {

  // SIGNUP API ROUTES
  app.post("/api/signup", function (req, res) {
    // console.log(res);
    db.user
      .create({
        email: req.body.email,
        userPassword: req.body.userPassword,
        fullName: req.body.fullName,
        age: req.body.age,
      })
      .then(function (dbUser) {
        res.redirect("/login");
        // res.json(dbUser);
      })
      .catch(function (err) {
        console.error("sign up error", err)
        res.json(err);
      });
  });

  //LOGIN API ROUTES
  app.post("/api/login", passport.authenticate("local"), function (req, res) {
    res.json(req.user);
  });

  //LOGOUT API ROUTES
  app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  });

  //USER TABLE API ROUTES
  app.get("/api/user", function (req, res) {
    if (!req.user) {
      // res.json({});
      db.user
        .findAll({
          include: [db.userData],
        })
        .then(function (dbUser) {
          res.json(dbUser);
        });
    } else {
      res.json({
        email: req.user.email,
        id: req.user.id,
        userPassword: req.user.userPassword,
        fullName: req.user.fullName,
        age: req.user.age,
      });
    }
  });

  app.get("/api/user/:id", function (req, res) {
    db.user
      .findOne({
        where: {
          email: req.params.email,
        },
        // include: [db.userData],
      })
      .then(function (dbUser) {
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