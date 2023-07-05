const formReserva = document.querySelector("#formNuevaReserva");
const reservaId = formReserva.dataset.id;

const nombre = document.querySelector("#nombre");
const apellido = document.querySelector("#apellido");
const fecha_reserva = document.querySelector("#fechareserva");
const fecha_vuelo = document.querySelector("#fechavuelo");
const destino = document.querySelector("#destino");
const costo = document.querySelector("#costo");
const telefono = document.querySelector("#telefono");

document.addEventListener("DOMContentLoaded", async () => {
  // Traemos la reserva
  const response = await fetch(`/api/${reservaId}`);
  const data = await response.json();

  // Mostrar en el formulario los datos que se quieren actualizar
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

  // Se envian los datos al servidor express
  const response = await fetch(`/api/${reservaId}`, {
    method: "PUT",
    body: JSON.stringify(reservaActualizada),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const respToJson = await response.json();

  if (response.status !== 200) {
    return Swal.fire({
      title: "Error",
      text: respToJson.message,
      icon: "error",
      confirmButtonText: "Aceptar",
    });
  }

  // Mostrar al ususario
  Swal.fire({
    title: "Reserva actualizada",
    text: respToJson.message,
    icon: "success",
    confirmButtonText: "Aceptar",
  });

  setTimeout(() => {
    window.location.href = "/";
  }, 2000);
});
