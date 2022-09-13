const { Sequelize, DataTypes } = require("sequelize");
const dotenv = require("dotenv");

dotenv.config({ path: "./details.env" });

// Establish db connection
const db = new Sequelize({
  dialect: "postgres",
  host: DB_HOST,
  username: DB_USERNAME,
  password: DB_PASSWORD, //process.env.DB_PASSWORD,
  port: DB_PORT,
  database: "DB",
  logging: false,
});

module.exports = { db, DataTypes };
