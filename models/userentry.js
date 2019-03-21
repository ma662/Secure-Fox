module.exports = function(sequelize) {
  var UserEntry = sequelize.define("UserEntry", {});

  UserEntry.associate = function(models) {
    UserEntry.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
    UserEntry.belongsTo(models.Entry, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return UserEntry;
};
