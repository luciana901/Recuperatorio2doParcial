const obtenerDatos = async () => {
  // Pedir las reservas
  const data = await fetch("http://localhost:4000/api", {
    method: "GET",
  });
  const reservas = await data.json();
  return reservas;
};

const mostrarReservas = (reservas, tablaElement) => {
  let registros = "";
  reservas.forEach((reserva) => {
    registros += `
            <tr>
                <td>${reserva.codigo}</td>
                <td>${reserva.nombre}</td>
                <td>${reserva.apellido}</td>
                <td>${dayjs(reserva.fecha_reserva).format(
                  "DD-MM-YYYY HH:mm"
                )}</td>
                <td>${dayjs(reserva.fecha_vuelo).format(
                  "DD-MM-YYYY HH:mm"
                )}</td>
                <td>${reserva.destino}</td>
                <td>${reserva.costo}</td>
                <td>${reserva.telefono}</td>
                <td class="gap-1">               
                    <a href="/actualizar-reserva/${
                      reserva.id
                    }" class="btn btn-sm btn-warning fa-regular fa-pen-to-square">
                        
                    </a>
                    <button class="btn btn-sm btn-danger fa-solid fa-trash" data-id="${
                      reserva.id
                    }" onClick=eliminarReserva(event)>
                    </button>
                </td>
            </tr>
        `;
  });

  tablaElement.innerHTML = registros;
};

const eliminarReserva = async (e) => {
  console.log(e);
  const id = e.target.dataset.id;

  // Se le consulta al usuario si quiere/está seguro de eliminar la reserva
  const result = await Swal.fire({
    title: "¿Está seguro de eliminar la reserva?",
    text: "Esta acción no se puede deshacer",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "Eliminar",
    cancelButtonText: "Cancelar",
  });

  if (!result.isConfirmed) {
    return;
  }

  const response = await fetch(`/api/${id}`, {
    method: "DELETE",
  });

  const data = await response.json();

  if (response.status !== 200) {
    Swal.fire({
      title: "Error",
      text: data.message,
      icon: "error",
      confirmButtonText: "Aceptar",
    });
  }

  Swal.fire({
    title: "Reserva eliminada",
    text: data.message,
    icon: "success",
    confirmButtonText: "Aceptar",
  });

  setTimeout(() => {
    window.location.href = "/";
  }, 2000);
};

document.addEventListener("DOMContentLoaded", async () => {
  const tbody = document.querySelector("#listadoReservas");
  const reservas = await obtenerDatos();
  mostrarReservas(reservas, tbody);
});
