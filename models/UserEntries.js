module.exports = function(sequelize) {
  var UserEntries = sequelize.define("UserEntries", {});

  UserEntries.associate = models => {
    UserEntries.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
    UserEntries.belongsTo(models.JournalEntry, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return UserEntries;
};
