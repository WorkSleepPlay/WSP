var express = require("express");
var session = require("express-session");
var exphbs = require("express-handlebars");

var PORT = process.env.PORT || 8080;
var db = require("./models");

var app = express();
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
app.use(express.static("public"));

app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

<<<<<<< HEAD
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);
=======
// Requiring our routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

// We need to use sessions to keep track of our user's login status
app.use(
  session({
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true
  })
);
app.use(passport.initialize());
app.use(passport.session());

>>>>>>> develop

db.sequelize.sync({
  // force: true
}).then(function () {
  app.listen(PORT, function () {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});