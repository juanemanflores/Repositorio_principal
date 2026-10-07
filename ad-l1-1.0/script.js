// Cambiar el primer "Hola Mundo" por "Adiós"
document.getElementById("primero").textContent = "Adiós";

// Cambiar el color de un encabezado a naranja
document.getElementById("naranja").style.color = "orange";

// Encabezado clickeable que cambia a marrón
document.getElementById("clic").addEventListener("click", function () {
  this.style.color = "brown";
});