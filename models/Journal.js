module.exports = function(sequelize, DataTypes) {
    var journal_entries = sequelize.define("journal_entries", {
      title: DataTypes.STRING,
      mood: DataTypes.STRING,
      blog: DataTypes.TEXT
    });
    return journal_entries;
  };
  