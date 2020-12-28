module.exports = function (sequelize, DataTypes) {
    var userData = sequelize.define("userData", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        day: {
            type: DataTypes.DATEONLY,
            allowNull: true,
        },
        actionType: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        startTime: {
            type: DataTypes.TIME,
            allowNull: true,
        },
        duration: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    }, {
        freezeTableName: true
    });
    userData.associate = function (models) {
        userData.belongsTo(models.user, {
            foreignKey: {
                allowNull: false
            }
        });
        // userData.belongsTo(models.actionType, {
        //     foreignKey: {
        //         allowNull: false,
        //         name: "actionType"
        //     }
        // });
    };
    return userData;
};


//select * where userid = ?? & actionType = ??