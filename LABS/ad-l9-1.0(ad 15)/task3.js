function mostrarEnlaces() {
  const enlaces = document.querySelectorAll("a[href]");

  const cantidad = enlaces.length;
  const primero = enlaces[0].getAttribute("href");
  const ultimo = enlaces[cantidad - 1].getAttribute("href");

  alert(
    "Cantidad de enlaces: " + cantidad +
    "\nPrimer enlace: " + primero +
    "\nÚltimo enlace: " + ultimo
  );
}