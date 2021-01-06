var path = require("path");
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
    let user = {
      fullName: req.user.fullName,
      email: req.user.email,
      age: req.user.age
    };
    // let userdata = {
    //   work: req.user.work,
    //   sleep: req.user.sleep,
    //   play: req.user.play
    // };
    res.render("profile", user);
    // res.render("profile", userData);
  });
};