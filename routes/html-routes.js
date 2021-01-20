var path = require("path");
var db = require("../models");
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {
  //SIGNUP HTML ROUTES

  //LOGIN HTML ROUTES
  app.get("/login", function (req, res) {
    res.render("login");
  });

  // INDEX HTML ROUTES
  app.get("/", function (req, res) {
    res.render("signup");
  });

  //LOGOUT HTML ROUTES
  app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/login")
  });

  //HOMEPAGE HTML ROUTES
  app.get("/home", isAuthenticated, function (req, res) {
    res.render("home");
  });

  //PROFILE USER HTML ROUTES
  app.get("/profile", isAuthenticated, function (req, res) {
    db.user
      .findOne({
        where: {
          id: req.user.id,
        },
        include: [{
          model: db.userdata
        }]
      }).then(function (dbUser) {
        const newUserData = dbUser.userdata.map(data => {
          return {
            actionType: data.actionType,
            day: data.day,
            duration: data.duration
          }
        });

        let user = {
          fullName: req.user.fullName,
          email: req.user.email,
          age: req.user.age,
          createdAt: req.user.createdAt,
          userData: newUserData
        };
        console.log("newUserData", newUserData)
        res.render("profile", user);
      });

  });
};