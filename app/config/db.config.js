module.exports = {
    HOST: "eu-cdbr-west-01.cleardb.com",
    USER: "b3e46d0f59e357",
    PASSWORD: "26c6ffd2",
    DB: "heroku_2dc269a62802d6e",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };