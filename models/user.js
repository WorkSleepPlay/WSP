module.exports = function (sequelize, DataTypes) {
    var user = sequelize.define("user", {
        fullName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
                isLowercase: true
            }
        },
        userPassword: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [4, 10]
            }
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                len: [1, 3],
                isInt: true
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
        },
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        }
        // userInfoId: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     defaultValue: 1
        // }
    }, {
        freezeTableName: true
    });
    user.associate = function (models) {
        user.hasMany(models.userdata, {
            onDelete: "cascade"
        });
    };
    return user;
};