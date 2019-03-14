module.exports = function (sequelize, DataTypes) {
  var Users_table = sequelize.define("Users_table", {
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.TEXT,
    google_ID: DataTypes.SRING,
    facebook_ID: DataTypes.STRING,
    github_ID: DataTypes.STRING
  });

  Users_table.associate = (models) => {
    Users_table.hasMany(models.UserEntries, {});
  };

  return Users_table;
};