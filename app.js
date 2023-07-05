// Imports
const cors = require("cors");
const express = require("express");
const path = require("path");
const helmet = require("helmet");
const morgan = require("morgan");

require("dotenv").config();

require("ejs");

const app = express();

const port = process.env.PORT || 5000;

//conección a la base de datos
const { sequelize } = require("./database");
const { error } = require("console");

sequelize
  .authenticate()
  .then(() => console.log("Base de Datos conectada"))
  .catch((error) => {
    console.log(error);
    process.exit();
  });

// Middlewares
// TODO: Implementar middlewares
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/api", require("./routes/reserva.routes"));

// TODO: Si la petición no coincide con ninguna de las rutas declaradas, mostrar error 404
app.use((req, res, next) => {
  return res.status(404).render("404");
});

// Starting the server
app.listen(port, () => console.log("Server on http://localhost:${port}"));
