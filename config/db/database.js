const Sequelize = require("sequelize");

module.exports = new Sequelize("db1", "root", "Kk539241", {
  host: "localhost",
  dialect: "mysql",
  port: 3306,
  define: {
    timestamps: false,
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});
