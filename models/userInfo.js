module.exports = function (sequelize, DataTypes) {
    var userInfo = sequelize.define("userInfo", {
        fullName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isAlpha: true
            }
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
        }
    });
    return userInfo;
};