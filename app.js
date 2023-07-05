// Imports
const cors = require("cors");
const express = require("express");
const helmet = require("helmet");
const path = require("path");

require("dotenv").config();

const app = express();

const port = process.env.PORT || 5000;

// Middlewares
// TODO: Implementar middlewares

app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/api", require("./routes/reserva.routes"));

// TODO: Si la petición no coincide con ninguna de las rutas declaradas, mostrar error 404

// Starting the server
app.listen(port, () => console.log("Server on http://localhost:${port}"));
