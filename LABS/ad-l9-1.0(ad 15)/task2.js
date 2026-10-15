function getFormvalue(event) {
    event.preventDefault();

    const nombre = document.querySelector('[name="fname"]').value;
    const apellido = document.querySelector('[name="lname"]').value;

    console.log("Nombre:", nombre);
    console.log("Apellido;", apellido);
}