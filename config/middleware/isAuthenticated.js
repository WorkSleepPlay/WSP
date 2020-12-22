module.exports = function (req, res, next) {
  console.log("is authenticated");
  console.log(req.user);
  if (req.user) {
    return next();
  }
  return res.redirect("/");
};
