module.exports = function (sequelize, DataTypes) {
  var Journal_table = sequelize.define("Journal_table", {
    entry_title: DataTypes.STRING,
    journal_entry: DataTypes.TEXT,
    mood: DataTypes.STRING,
    associated_image: DataTypes.STRING,
    f_degrees: DataTypes.INTEGER,
    weather: DataTypes.STRING
  });

  Journal_table.associate = (models) => {
    Journal_table.hasMany(models.UserEntries, {});
  };

  return Journal_table;
};