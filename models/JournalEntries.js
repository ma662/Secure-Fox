module.exports = function(sequelize, DataTypes) {
  var JournalEntry = sequelize.define("JournalEntry", {
    // entryTitle: DataTypes.STRING,
    journalEntry: DataTypes.TEXT,
    // mood: DataTypes.STRING,
    // associatedImage: DataTypes.STRING,
    // location: DataTypes.STRING,
    // temp: DataTypes.INTEGER,
    // weather: DataTypes.STRING
  });

  JournalEntry.associate = models => {
    JournalEntry.hasMany(models.UserEntries, {});
  };

  return JournalEntry;
};
