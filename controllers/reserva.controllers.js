const Reserva = require("../models/Reserva");

const ctrl = {};

// ==========================================
//         Rutas para CRUD de reservas
// ==========================================

// Obtener todas las reservas
ctrl.obtenerReservas = async (req, res) => {
  try {
    const reservas = await Reserva.findAll({
      where: {
        estado: true,
      },
    });

    return res.json(reservas);
  } catch (error) {
    console.log("Error al obtener las reservas", error);
    return res.status(500).json({
      message: "Error al obtener las reservas",
    });
  }
};
// Obtener una reserva
ctrl.obtenerReserva = async (req, res) => {
  try {
    const { id } = req.params;
    const reserva = await Reserva.findOne({
      whare: {
        estado: true,
        id,
      },
    });
    return res.json(reserva);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Error al obtener la reserva",
    });
  }
};

// Crear una reserva
ctrl.crearReserva = async (req, res) => {
  const {
    nombre,
    apellido,
    fecha_reserva,
    fecha_vuelo,
    destino,
    costo,
    telefono,
  } = req.body;

  try {
    // Se crea una nueva instancia de reserva
    const nuevaReserva = new Reserva({
      nombre,
      codigo: new Date().getTime(),
      apellido,
      fecha_reserva,
      fecha_vuelo,
      destino,
      costo,
      telefono,
    });

    // Para guarda en la BD
    await nuevaReserva.save();

    return res.status(201).json({ message: "Reserva creada" });
  } catch (error) {
    console.log("Error al crear la reserva", error);
    return res.status(500).json({ message: "Error al crear la reserva" });
  }
};

// Actualizar una reserva
ctrl.actualizarReserva = async (req, res) => {
  try {
    const { id } = req.params;
    const reserva = await Reserva.findByPk(id);
    await reserva.update(req.body);
    return res.json({
      message: "Reserva actualizada",
    });
  } catch (error) {
    console.log("Error al actualizar la reserva", error);
    return res.status(error.status || 500).json({
      message: error.message,
    });
  }
};
// Eliminar una reserva de forma lógica
ctrl.eliminarReserva = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      throw {
        status: 400,
        message: "No se envio el id de la reserva",
      };
    }
    const reserva = await Reserva.findByPk(id);
    await reserva.update({ estado: false });
    return res.json({ message: "La reserva se eliminó" });
  } catch (error) {
    console.log("Error al eliminar la reserva", error);
    return res.status(error.status || 500).json({
      message: error.message || "Error al eliminar la reserva",
    });
  }
};
module.exports = ctrl;
