const boton = document.getElementById("botonAlerta");
const espacioAlerta = document.getElementById("espacioAlerta");

boton.addEventListener("click", function () {
  espacioAlerta.innerHTML = `
    <div class="alert alert-warning alert-dismissible fade show" role="alert">
      Alert, someone pushed the button
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="alert"
        aria-label="Cerrar">
      </button>
    </div>
  `;
});