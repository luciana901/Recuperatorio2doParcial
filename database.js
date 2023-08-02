const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect:
    "mysql"
  }
);

const conexionDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Base de datos Conectada");
  } catch (error) {
    console.log("ERROR AL CONECTAR DB: ", error);
  }
};

module.exports = {
  conexionDB,
  sequelize,
  DataTypes,
  Model,
};
