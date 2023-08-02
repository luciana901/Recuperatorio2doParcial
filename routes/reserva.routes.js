// TODO: Importar el modelo y controladores de reservas, luego vincular rutas con controladores

const router = require('express').Router();
const {
  renderCrearReserva,
  renderActualizarReserva,
  obtenerReservas,
  obtenerReserva,
  crearReserva,
  actualizarReserva,
  eliminarReserva,
} = require("../controllers/reserva.controllers");

// ==========================================
//         Rutas para renderizar vistas
// ==========================================

// Obtener todas las reservas
router.get("/", obtenerReservas);

// Formulario para crear una reserva
router.get("/nueva-reserva", renderCrearReserva);

// Formulario para actualizar una reserva
router.get("/actualizar-reserva/:id", renderActualizarReserva);

// ==========================================
//         Rutas para CRUD de reservas
// ==========================================

// Obtener todas las reservas
router.get("/api/reservas", obtenerReservas);

// Obtener una reserva

router.get('/api/reservas/:id', obtenerReserva);

// Crear una reserva
router.post("/api/reservas", crearReserva);

// Actualizar una reserva
router.put("/api/reservas/:id", actualizarReserva);

// Eliminar una reserva de forma lógica
router.delete("/api/reserva/:id", eliminarReserva);

module.exports = router;
