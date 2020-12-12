
var bcrypt = require("bcryptjs");
module.exports = function(sequelize, DataTypes) {
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
        validate: {
            isEmail: true,
            isLowercase: true
          }
      },
      userPassword: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
        len: [4,10]
        }
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: true,
          validate: {
            len: [1,3],
            isInt: true
          }
      }
    });

    userInfo.prototype.validPassword = function(password) {
     return bcrypt.compareSync(password, this.password);
     };
                                        
    userInfo.addHook("beforeCreate", function(user) {
    userInfo.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    });
    return userInfo;
  };


