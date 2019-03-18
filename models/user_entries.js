module.exports = function (sequelize, DataTypes) {
    var UserEntries = sequelize.define("UserEntries", {});

    UserEntries.associate = (models) => {
        UserEntries.belongsTo(models.Users_table, {
            foreignKey: {
                allowNull: false
            }
        });
        UserEntries.belongsTo(models.Journal_table, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return UserEntries;
};