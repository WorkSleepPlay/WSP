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
    "username": "root",
    "password": process.env.DBPASSWORD,
    "database": "wsp",
    "host": "127.0.0.1",
    "port": 3306,
    "dialect": "mysql",
    "use_env_variable": "JAWSDB_URL" 
  }
}