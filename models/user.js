module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  });

  User.associate = function(models) {
    // User.hasMany(models.Entry, {
    //   onDelete. "cascade"
    // });

    User.hasMany(models.UserEntry, {});
  };

  return User;
};
