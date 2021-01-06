module.exports = function (sequelize, DataTypes) {
    var userdata = sequelize.define("userdata", {
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
    userdata.associate = function (models) {
        userdata.belongsTo(models.user, {
            foreignKey: {
                allowNull: false
            }
        });
        // userdata.belongsTo(models.actionType, {
        //     foreignKey: {
        //         allowNull: false,
        //         name: "actionType"
        //     }
        // });
    };
    return userdata;
};


//select * where userid = ?? & actionType = ??