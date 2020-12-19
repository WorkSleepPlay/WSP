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
        loginDate: {
            type: DataTypes.DATEONLY,
            allowNull: true,
            get() {
                return moment(this.getDataValue('loginDate')).format('DD/MM/YYYY');
            }
        },
        daysActive: {
            type: DataTypes.INTEGER,
            allowNull: true,
            get() {
                return moment(this.getDataValue('daysActive')).startOf(createdAt).fromNow();
            }
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