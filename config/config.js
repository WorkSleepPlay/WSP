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

  }
}

// mysql://rgnex4npv8iewh7w:msebvtac2qylxnz7@l0ebsc9jituxzmts.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/ixqfzv5lhbhg8w1t