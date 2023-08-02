const formCrearReserva = document.querySelector("#formCrearReserva");

console.log(formCrearReserva)
formCrearReserva.addEventListener("submit", async (e) => {
  e.preventDefault();

  const nombre = document.querySelector('nombre').value;
  const apellido = document.querySelector('apellido').value;
  const fecha_reserva = document.querySelector('fecha_reserva').value;
  const fecha_vuelo = document.querySelector('fecha_vuelo').value;
  const destino = document.querySelector('destino').value;
  const costo = document.querySelector('costo').value;
  const telefono = document.querySelector('telefono').value;

  const body = {
    codigo: new Date().getTime(),
    nombre,
    apellido,
    fecha_reserva,
    fecha_vuelo,
    destino,
    costo,
    telefono
  };

  try {
    fetch('api/reservas', {
    method:'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
},
alert('Reserva agregada correctamente')
)
} catch (error) {
    console.log(error)
    alert('Error al agregar la reserva')
}

});

