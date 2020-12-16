require("dotenv").config();
module.exports = 
    {
        "development": {
          "username": "root",
          "password": process.env.DBPASSWORD,
          "database": "wsp",
          "host": "127.0.0.1",
          "dialect": "mysql"
        },
        "test": {
          "username": "root",
          "password": process.env.DBPASSWORD,
          "database": "database_test",
          "host": "127.0.0.1",
          "dialect": "mysql"
        },
        "production": {
          "username": "root",
          "password": process.env.DBPASSWORD,
          "database": "database_production",
          "host": "127.0.0.1",
          "dialect": "mysql"
        }
      }