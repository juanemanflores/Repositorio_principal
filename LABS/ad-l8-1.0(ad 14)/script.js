const formulario = document.getElementById("formularioContacto");
const espacioAlerta = document.getElementById("alertaContacto");

if (formulario && espacioAlerta) {
  formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    espacioAlerta.innerHTML = `
      <div class="alert alerta-morada alert-dismissible fade show" role="alert">
        Mensaje enviado
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
          aria-label="Cerrar">
        </button>
      </div>
    `;

    formulario.reset();
  });
}