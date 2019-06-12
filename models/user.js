var bcrypt = require("bcrypt");

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define(
    "User",
    {
      username: {
        type: DataTypes.STRING,
        unique: true
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      password: {
        type: DataTypes.STRING
      },
        passwordMatch: {
          type: DataTypes.STRING
        }
    },
    {
        hooks : {
            beforeCreate : (user , options) => {
                {
                    user.password = user.password && user.password != "" ? bcrypt.hashSync(user.password, 10) : "";
                    user.passwordMatch = user.passwordMatch && user.passwordMatch != "" ? bcrypt.hashSync(user.passwordMatch, 10) : "";
                }
            }
        }
    }
  );
  return User;
};
