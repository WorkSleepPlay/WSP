require("dotenv").config();

module.exports = {
  "development": {
    "username": "root",
    "password": process.env.DBPASSWORD,
    "database": "wsp",
    "host": "127.0.0.1",
    "port": 3306,
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": process.env.DBPASSWORD,
    "database": "wsp",
    "host": "127.0.0.1",
    "port": 3306,
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.JAWSDB_user,
    "password": process.env.JAWSDB_password,
    "database": process.env.JAWSDB_database,
    "host": process.env.JAWSDB_host,
    "dialect": "mysql",
    "port": 3306,

  }
}

