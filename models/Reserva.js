// TODO: Crear modelo de datos de Reserva
const { Sequelize, DataTypes } = require("../database");

const Reserva = sequelize.define(
  "Reserva",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    codigo: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    apellido: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    fecha_reserva: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    fecha_vuelo: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    destino: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    costo: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    telefono: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    estado: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
    },
    updateAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    deleteAt: {
      type: DataTypes.DATE,
      allowNull: true
    },
  },
  {
    createAt: true,
    updateAt: true,
    deleteAt: true,
    tableName: "reservas",
  }
);

Reserva.sync({ force: false }).then(() => {
  console.log('Tabla de Reservas creada');
});
module.exports = Reserva;