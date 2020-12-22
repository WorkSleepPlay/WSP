var path = require("path");
const isAuthenticated = require("../config/middleware/isAuthenticated")
const db = require("../models");
const passport = require("../config/passport");

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
        res.render("login");
      } else {
        res.redirect("signup");
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
    app.get("/profile", isAuthenticated, function (req, res) {
          db.userData.findAll({
            where: {
              id: req.user.id
            }
          }).then((data) => {
            let userDataArray = [];

            for (let i = 0; i < data.length; i++) {
              userDataObject = {
                work: data[i].dataValues.work,
                sleep: data[i].dataValues.sleep,
                play: data[i].dataValues.play
              };
              userDataArray.push(userDataObject);
            };

          });
          // app.get("/profile", isAuthenticated, function (req, res) {
          //   res.render("profile");
          // });
        };

        // app.get("/profile", isAuthenticated, function (req, res) {
        //   res.render("profile");
        // });