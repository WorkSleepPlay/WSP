var express = require("express");
var session = require("express-session");
var exphbs = require("express-handlebars");
var passport = require("./config/passport");
var PORT = process.env.PORT || 8080;
var db = require("./models");

var app = express();
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(express.static("public"));
app.use(
  session({
    secret: "yourSecret",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main",
  })
);
app.set("view engine", "handlebars");
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);
app.use(
  session({
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true,
  })
);

db.sequelize
  .sync({
  })
  .then(function () {
    app.listen(PORT, function () {
      console.log(
        "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
        PORT,
        PORT
      );
    });
  });
