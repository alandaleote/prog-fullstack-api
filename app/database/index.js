const dbConfig = require("./db.config.js");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.client = require("../models/client.models")(sequelize, Sequelize);
db.book = require("../models/book.models.js")(sequelize, Sequelize);

module.exports = db;
