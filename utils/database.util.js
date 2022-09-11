const { Sequelize, DataTypes } = require("sequelize");
const dotenv = require("dotenv");

dotenv.config({ path: "./details.env" });

// Establish db connection
const db = new Sequelize({
  dialect: "postgres",
  host: "127.0.0.1",
  username: "postgres",
  password: "1622091", //process.env.DB_PASSWORD,
  port: 5432,
  database: "tasks",
  logging: false,
});

module.exports = { db, DataTypes };
