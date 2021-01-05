module.exports = function (sequelize, DataTypes) {
    var actionType = sequelize.define("actionType", {
        action: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    }, {
        freezeTableName: true
    });
    actionType.associate = function (models) {
        // actionType.hasMany(models.userData, {
        //     foreignKey: {
        //         allowNull: false
        //     }
        // });
    };
    return actionType;
};