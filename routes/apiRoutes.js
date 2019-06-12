var db = require("../models");
// var bcrypt = require("bcrypt");
// var saltRounds = 10;


module.exports = function(app) {

  // Create a new user
  app.post("/register", function(req, res) {
    req.checkBody("username", "Username field cannot be empty.").notEmpty();
    req.checkBody("username", "Username must be between 4-15 characters long.").len(4, 15);
    req.checkBody("email", "The email you entered is invalid, please try again.").isEmail();
    req.checkBody("email", "Email address must be between 4-100 characters long, please try again.").len(4, 100);
    req.checkBody("password", "Password must be between 8-100 characters long.").len(8, 100);
    req.checkBody("password", "Password must include one lowercase character, one uppercase character, a number and a special character.").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.* )(?=.*[^a-zA-Z0-9]).{8,}$/, "i");
    // req.checkBody("passwordMatch", "Password must be between 8-100 characters long.").len(8, 100);
    req.checkBody("passwordMatch", "Passwords do not match, please try again.").equals(req.body.password);

    var errors = req.validationErrors();

    if (errors) {
      console.log(`errors: ${JSON.stringify(errors)}`);
      res.render("register", {
        title: "Registration Error",
        errors: errors
      });
    } 
    else {
      // var hash = bcrypt.hashSync(req.body.password, saltRounds);
      db.User.create(req.body
      //   {
      //   username: req.body.username,
      //   email: req.body.username,
      //   password: hash
      // }
        ).then(function(dbUser) {
        res.json(dbUser);
        console.log(dbUser);
      });
    }
  });
};
