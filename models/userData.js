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
            type: DataTypes.DATE,
            allowNull: true,
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize.literal("NOW()")
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize.literal("NOW()")
        },
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        }
    }, {
        freezeTableName: true
    });
    userData.associate = function (models) {
        userData.belongsTo(models.user, {
            // foreignKey: {
            //     allowNull: false
            // }
        });
    };
    return userData;
};