var db = require("../models");
var passport = require("../config/passport");

module.exports = function (app) {

  // SIGNUP API ROUTES
  app.post("/api/signup", function (req, res) {
    db.user
      .create({
        email: req.body.email,
        userPassword: req.body.userPassword,
        fullName: req.body.fullName,
        age: req.body.age,
      })
      .then(function (dbUser) {
        res.redirect("/login");
      })
      .catch(function (err) {
        console.error("sign up error", err);
        res.json(err);
      });
  });

  //LOGIN API ROUTES
  app.post("/api/login", passport.authenticate("local"), function (req, res) {
    res.json(req.user);
  });

  //LOGOUT API ROUTES

  //USER TABLE API ROUTES
  app.get("/api/user", function (req, res) {
    console.log("api/user req", req)
    // if (req.user) {
      res.json({
        fullName: req.user.fullName,
        email: req.user.email,
        age: req.user.age,
        createdAt: req.user.createdAt,
        id: req.user.id
      })
    // }

  });
  app.get("/api/user/:id", function (req, res) {
    // if (!req.user) {

    console.log("line 48 id", req.params.id)
    db.user
      .findOne({
        where: {
          id: req.params.id,
        },
        include: [{
          model: db.userdata
        }],
      })
      .then(function (dbUser) {
        // console.log("/api/user/:id", dbUser);
        console.log("dbUser userData", dbUser.dataValues.userdata[0])
        res.json({
          // email: req.user.email,
          // id: req.user.id,
          // fullName: req.user.fullName,
          // age: req.user.age,
          // createdAt: req.user.createdAt,
          dbUser: dbUser
        });
        // } else {
        //   res.json({
        //     email: req.user.email,
        //     id: req.user.id,
        //     fullName: req.user.fullName,
        //     age: req.user.age,
        //   });
        // }
      });

    // app.get("/api/user/:id", function (req, res) {
    //   db.user
    //     .findOne({
    //       where: {
    //         id: req.params.id,
    //       },
    //       include: [db.userdata],
    //     })
    //     .then(function (dbUser) {
    //       res.json(dbUser);
    //     });
    // });

    //userdata TABLE API ROUTES
    app.post("/api/createdata", function (req, res) {
      db.userdata
        .create({
          day: new Date(),
          actionType: req.body.actionType,
          startTime: new Date(req.body.startTime),
          duration: req.body.duration,
          userId: req.user.id
        })
        .then(function (newData) {
          res.redirect("/home");
        })
        .catch(function (err) {
          console.error("error collecting data", err);
          res.json(err);
        });
    });

    // app.get("/api/userdata", function (req, res) {
    //   if (!req.user) {
    //     db.userdata
    //       .findAll({
    //         where: {
    //           userId: req.user.id
    //         },
    //         include: [db.userdata],
    //       })
    //       .then(function (dbUser) {
    //         res.json(dbUser);
    //       });
    //   } else {
    //     res.json({
    //       work: req.user.work,
    //       sleep: req.user.sleep,
    //       play: req.user.play
    //     });
    //   }
    // });

    app.get("/api/userdata/:userid", function (req, res) {
      db.userdata
        .findOne({
          where: {
            userid: req.params.userid,
          },
          include: [db.userdata],
        })
        .then(function (dbUser) {
          res.json(dbUser);
        });
    });
  });


























  // app.post("api/update", function (req, res) {
  //   db.userdata.create({
  //       work: req.body.work,
  //       sleep: req.body.sleep,
  //       play: req.body.play,
  //     })
  //     .then(function (dbUser) {
  //       res.redirect(307, "/profile");
  //       // do we want them to go to the login after to authenticate? Or go somewhere else
  //     })
  //     .catch(function (err) {
  //       res.status(401).json(err);
  //     });
  // })
};