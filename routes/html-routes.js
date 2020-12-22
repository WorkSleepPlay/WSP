var path = require("path");
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {
  //SIGNUP HTML ROUTES
  // app.get("/signup", function (req, res) {
  //   // if (req.user) {
  //   //   res.redirect("/login");
  //   // } else {
  //   res.render("signup");
  //   // }
  // });

  //LOGIN HTML ROUTES
  app.get("/login", function (req, res) {
    // if (req.user) {
    res.render("login");
    // } else {
    // res.redirect("signup");
    // }
  });

  // INDEX HTML ROUTES
  app.get("/", function (req, res) {
    res.render("signup");
    // if (req.user) {
    //   console.log("i logged in");
    //   res.render("login");
    // } else {
    //   console.log("I didn't");
    //   res.redirect("/signup");
    // }
  });

  //LOGOUT HTML ROUTES
  app.get("/logout", function (req, res) {
    // res.render("login");
    req.logout();
    res.redirect("/login")
  });

  //HOMEPAGE HTML ROUTES
  app.get("/home", isAuthenticated, function (req, res) {
    // const currentUser = req.session.passport.user;
    // if (currentUser) {
    //   res.render("home", currentUser);
    // }
    // res.redirect("login");
    // console.log("i am in home");
    // console.log(req.session);
    // res.render("home");
    res.render("home");
  });

  // app.get("/home", isAuthenticated, function (req, res) {
  //   res.render("home");
  // });

  //PROFILE HTML ROUTES
  app.get("/profile", isAuthenticated, function (req, res) {
    let user = {
      fullName: req.user.fullName,
      email: req.user.email,
      age: req.user.age
    };
    res.render("profile", user);
  });
};

// app.get("/profile", isAuthenticated, function (req, res) {
//   res.render("profile");
// });