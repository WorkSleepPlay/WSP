var db = require("../models");
var passport = require("../config/passport");

module.exports = function (app) {
  app.post("/api/signup", function (req, res) {
    db.user
      .create({
        email: req.body.email,
        userPassword: req.body.userPassword,
        fullName: req.body.fullName,
        age: req.body.age,
      })
      .then(function (dbUser) {
        res.redirect("/login");
      })
      .catch(function (err) {
        console.error("sign up error", err);
        res.json(err);
      });
  });

  app.post("/api/login", passport.authenticate("local"), function (req, res) {
    console.log("I am in api/log");
    res.json(req.user);
  });

  app.get("/api/user", function (req, res) {
    if (!req.user) {
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
        fullName: req.user.fullName,
        age: req.user.age,
      });
    }
  });

  app.get("/api/user/:id", function (req, res) {
    db.user
      .findOne({
        where: {
          id: req.params.id,
        },
        include: [db.userData],
      })
      .then(function (dbUser) {
        res.json(dbUser);
      });
  });
};