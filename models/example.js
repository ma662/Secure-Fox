module.exports = function(sequelize, DataTypes) {
  var users_tables = sequelize.define("users_tables", {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    password2: DataTypes.STRING,
  });
  return users_tables;
};
