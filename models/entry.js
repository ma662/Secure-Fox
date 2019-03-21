module.exports = function(sequelize, DataTypes) {
  var Entry = sequelize.define("Entry", {
    // entryTitle: DataTypes.STRING,
    Entry: DataTypes.TEXT,
    // mood: DataTypes.STRING,
    // associatedImage: DataTypes.STRING,
    // location: DataTypes.STRING,
    // temp: DataTypes.INTEGER,
    // weather: DataTypes.STRING
  });

  Entry.associate = models => {
    Entry.hasMany(models.UserEntry, {});
  };
  return Entry;
};
