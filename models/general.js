module.exports = function(sequelize, DataTypes) {
  var General = sequelize.define("General", {
    name: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 100]
      }
    },
    phone: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 10]
      }
    },
    address1: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 100]
      }
    },
    address2: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 100]
      }
    },
    city: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 20]
      }
    },
    state: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 20]
      }
    },
    zip: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 6]
      }
    }
  });
  General.associate = function(models) {
    // Associating General Information with User
    General.belongsTo(models.User);
  };
  return General;
};
