module.exports = function(sequelize, DataTypes) {
  var JournalEntry = sequelize.define("JournalEntry", {
    entryTitle: DataTypes.STRING,
    journalEntry: DataTypes.TEXT,
    mood: DataTypes.INTEGER,
    associatedImage: DataTypes.STRING,
    temp: DataTypes.INTEGER,
    weather: DataTypes.STRING
  });

  JournalEntry.associate = models => {
    JournalEntry.hasMany(models.UserEntries, {});
  };

  return JournalEntry;
};
