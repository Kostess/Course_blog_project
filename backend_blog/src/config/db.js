require('dotenv').config();

const { Sequelize } = require('sequelize');

const nameDB = process.env.DB_NAME;
const userDB = process.env.DB_USER;
const passwordDB = process.env.DB_PASSWORD;
const hostDB = process.env.DB_HOST;
const dialectDB = process.env.DB_DIALECT;
const portDB = process.env.DB_PORT;

const sequelize = new Sequelize(nameDB, userDB, passwordDB, {
    host: hostDB,
    dialect: dialectDB,
    logging: false,
    port: portDB,
});

module.exports = sequelize;