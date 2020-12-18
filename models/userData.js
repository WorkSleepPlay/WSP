module.exports = function (sequelize, DataTypes) {
    var userData = sequelize.define("userData", {
        work: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        sleep: {
            type: DataTypes.DATE(6),
            allowNull: true,
        },
        play: {
            type: DataTypes.DECIMAL,
            allowNull: true,
        },
        loginDate: {
            type: DataTypes.DATEONLY,
            allowNull: true,
        },
        loginDuration: {
            type: DataTypes.DECIMAL,
            allowNull: true,
        },
    }, {
        freezeTableName: true
    });
    userData.associate = function (models) {
        userData.belongsTo(models.userInfo, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return userData;
};