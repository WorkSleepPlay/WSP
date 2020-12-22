var bcrypt = require("bcryptjs");

module.exports = function (sequelize, DataTypes) {
    const user = sequelize.define("user", {
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
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: true,
        }
    });

    user.associate = function (models) {
        user.hasMany(models.userData, {
            foreignKey: {
                onDelete: "cascade"
            },
            hooks: true
        });
    };

    user.prototype.validPassword = function (password) {
        return bcrypt.compareSync(password, this.password);
    };

    user.addHook("beforeCreate", function (user) {
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    });
    return user;
};