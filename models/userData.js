module.exports = function (sequelize, DataTypes) {
    const userData = sequelize.define("userData", {
        work: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        sleep: {
            type: DataTypes.DATE(6),
            allowNull: true,
        },
        play: {
            type: DataTypes.DATE,
            allowNull: true,
        }
    });

    userData.associate = function (models) {
        userData.belongsTo(models.user, {
            foreignKey: {
                allowNull: false,
                onDelete: "cascade"
            }
        });
        console.log(userData);
    };
    return userData;
};