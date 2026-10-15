const contenedor = document.querySelector("#container");

const segundos = document.querySelectorAll("li.second");

const terceroOrdenado = document.querySelector("ol li.third");

console.log("Contenedor:", contenedor);
console.log("Elementos second:", segundos); 
console.log("Tercero dentro de ol:", terceroOrdenado);

const saludo = document.createElement("p");
saludo.textContent = "Hello!";

contenedor.prepend(saludo);

const pie = document.querySelector(".footer");

pie.classList.add("main");
console.log("Después de agregar:", pie.className);

pie.classList.remove("main");
console.log("Después de quitar:", pie.className);

const lista = document.querySelector("#container ul");

const nuevoElemento = document.createElement("li");
nuevoElemento.textContent = "four";

lista.append(nuevoElemento);