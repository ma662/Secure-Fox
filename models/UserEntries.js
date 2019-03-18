module.exports = function(sequelize) {
  var UserEntries = sequelize.define("UserEntries", {});

  UserEntries.associate = models => {
    UserEntries.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
    UserEntries.belongsTo(models.JournalEntries, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return UserEntries;
};
