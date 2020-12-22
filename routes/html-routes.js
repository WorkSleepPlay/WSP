var path = require("path");
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {
  //SIGNUP HTML ROUTES
  app.get("/signup", function (req, res) {
    res.render("signup");
  });

  //LOGIN HTML ROUTES
  app.get("/login", function (req, res) {
    res.render("login");
  });

  // INDEX HTML ROUTES
  app.get("/", function (req, res) {
    if (req.user) {
      res.redirect("/home")
    } else {
      res.redirect("/signup");
    }
  });

  //LOGOUT HTML ROUTES
  app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/login");
  });

  //HOMEPAGE HTML ROUTES
  app.get("/home", isAuthenticated, function (req, res) {
    res.render("home");
  });
  //PROFILE HTML ROUTES
  app.get("/profile", isAuthenticated, function (req, res) {
    let user = {
      fullName: req.user.fullName,
      email: req.user.email,
      age: req.user.age
    }
    res.render("profile", user);
  });
};
