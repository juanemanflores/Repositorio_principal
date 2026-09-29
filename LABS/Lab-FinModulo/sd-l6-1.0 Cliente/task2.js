// Task 2: listUsers()
import { getServerURL } from "./task1.js";
export async function listUsers () {
   const respuesta = await fetch (`${getServerURL()}/users`);
   const datos = await respuesta.json();
   console.log(datos)
}

