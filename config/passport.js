var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

var db = require("../models");

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
    },
    function (email, userPassword, done) {
      db.user
        .findOne({
          where: {
            email: email,
          },
        })
        .then(function (dbUser) {
          if (!dbUser) {
            return done(null, false, {
              message: "Incorrect email.",
            });
          }
          console.log(dbUser);
          return done(null, dbUser);
        });
    }
  )
);

passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});

module.exports = passport;
