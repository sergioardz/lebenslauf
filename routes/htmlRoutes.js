// var db = require("../models");

module.exports = function(app) {
  // Load Home page
  app.get("/", function(req, res) {
    res.render("homepage");
  });

  app.get("/register", function(req, res) {
    res.render("register", {
      title: "Registration"
    });
  });

  app.get("/login", function(req, res) {
    res.render("login", {
      title: "Login"
    });
  });

  app.get("/profile", function(req, res) {
    res.render("profile");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
