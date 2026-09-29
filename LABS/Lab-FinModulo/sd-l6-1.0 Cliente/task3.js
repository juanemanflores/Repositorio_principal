// Task 3: addUser(first_name, last_name, email)
import { getServerURL } from "./task1.js";

export async function addUser(first_name, last_name, email) {
    const respuesta = await fetch(`${getServerURL()}/users`);
    const datos = await respuesta.json();

    const ids = datos.map(usuario => usuario.id);
    const idMasAlto = Math.max(...ids);
    const nuevoId = idMasAlto + 1;

    await fetch(`${getServerURL()}/users`, { //Aquí se está creando el usuario
        method: "POST",
        body: JSON.stringify({
            id: nuevoId,
            first_name: first_name,
            last_name: last_name,
            email: email
        }),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    });
}