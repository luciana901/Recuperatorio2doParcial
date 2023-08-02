const formReserva = document.querySelector("#formActualizarReserva");
const reservaId = formReserva.dataset.id;

const nombre = document.querySelector("#nombre");
const apellido = document.querySelector("#apellido");
const fecha_reserva = document.querySelector("#fechareserva");
const fecha_vuelo = document.querySelector("#fechavuelo");
const destino = document.querySelector("#destino");
const costo = document.querySelector("#costo");
const telefono = document.querySelector("#telefono");

document.addEventListener("DOMContentLoaded", async () => {
  const response = await fetch(`/api/reservas/${reservaId}`);
  const data = await response.json();
  console.log(data)
  nombre.value = data.nombre;
  apellido.value = data.apellido;
  fecha_reserva.value = data.fecha_reserva;
  fecha_reserva.value = dayjs(data.fecha_reserva).format("DD-MM-YYYY HH:mm");
  fecha_vuelo.value = dayjs(data.fecha_vuelo).format("DD-MM-YYYY HH:mm");
  destino.value = data.destino;
  costo.value = data.costo;
  telefono.value = data.telefono;
});

formReserva.addEventListener("submit", async (e) => {
  e.preventDefault();

  reservaActualizada = {
    nombre: nombre.value,
    apellido: apellido.value,
    fecha_reserva: fecha_reserva.value,
    fecha_vuelo: fecha_vuelo.value,
    destino: habitacion.value,
    costo: costo.value,
    telefono: telefono.value,
  };


  const response = await fetch(`/api/reservas/${reservaId}`, {
    method: "PUT",
    body: JSON.stringify(reservaActualizada),
    headers: {
      "Content-Type": "application/json",
    },
  });

  alert('Reserva Actualizada')

 
  setTimeout(() => {
    window.location.href = "/";
  }, 2000);
});
