// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var passport = require("../config/passport");
// var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {
  //SIGNUP ROUTES
  app.get("/signup", function (req, res) {
<<<<<<< HEAD
    if (req.user) {
      res.redirect("/");
    } else {
      res.render("signup");
    }
=======
    // if (req.user) {
    //   res.redirect("/login");
    // } else {
      res.render("signup");
    // }
  });
  app.get("/login", function (req, res) {
    // if (req.user) {
      res.render("login");
    // } else {
    //   res.redirect("signup");
    // }
>>>>>>> develop
  });

  //LOGIN ROUTES
  app.get("/", function (req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.render("home");
    } else {
      res.render("login");
    }
  });

  app.get("/login", function (req, res) {
    if (req.user) {
      res.redirect("/home");
    } else {
      res.render("login");
    }
  });

  //LOGOUT ROUTES
  app.get("/logout", function (req, res) {
    // If the user already has an account send them to the members page
    res.render("login");
  });

  //HOMEPAGE ROUTES
  app.get("/home", function (req, res) {
    // If the user already has an account send them to the members page
    res.render("home");
  });

  // app.get("/home", isAuthenticated, function (req, res) {
  //   // If the user already has an account send them to the members page
  //   res.render("home");
  // });

  //PROFILE ROUTES
  app.get("/profile", function (req, res) {
    res.render("profile");
  });
};

// app.get("/profile", isAuthenticated, function (req, res) {
//   res.render("profile");
// });