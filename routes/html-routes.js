var path = require("path");
// var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {

  //SIGNUP HTML ROUTES
  app.get("/signup", function (req, res) {
    // if (req.user) {
    //   res.redirect("/login");
    // } else {
    res.render("signup");
    // }
  });

  //LOGIN HTML ROUTES
  app.get("/login", function (req, res) {
    // if (req.user) {
    res.render("login");
    // } else {
    //   res.redirect("signup");
    // }
  });

  // INDEX HTML ROUTES
  app.get("/", function (req, res) {
    if (req.user) {
      res.render("login");
    } else {
      res.redirect("/signup");
    }
  });

  //LOGOUT HTML ROUTES
  app.get("/logout", function (req, res) {
    res.render("login");
  });

  //HOMEPAGE HTML ROUTES
  app.get("/home", function (req, res) {
    res.render("home");
  });

  // app.get("/home", isAuthenticated, function (req, res) {
  //   res.render("home");
  // });

  //PROFILE HTML ROUTES
  app.get("/profile", function (req, res) {
    res.render("profile");
  });
};

// app.get("/profile", isAuthenticated, function (req, res) {
//   res.render("profile");
// });