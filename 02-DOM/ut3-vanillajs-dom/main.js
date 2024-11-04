let titulo = document.getElementById("titulo").textContent;

let contenedor = document.getElementsByClassName("contenedor")[0];
let parrafo1 = contenedor.getElementsByClassName("parrafo")[0].textContent;
let parrafo2 = contenedor.getElementsByClassName("parrafo")[1].textContent;

let inputNombre = document.getElementsByName("nombre")[0].placeholder;
let inputApellido = document.getElementsByName("apellido")[0].placeholder;

let elemento1 = document.getElementsByTagName("li")[0].textContent;
let elemento2 = document.getElementsByTagName("li")[1].textContent;
let elemento3 = document.getElementsByTagName("li")[2].textContent;

let titulo2 = document.querySelector("#titulo").textContent;

let parrafo1QA = document.querySelectorAll(".contenedor .parrafo")[0].textContent;
let parrafo2QA = document.querySelectorAll(".contenedor .parrafo")[1].textContent;

console.log(titulo + " -> get via getElementById");

console.log(parrafo1 + " -> get via getElementsByClassName");
console.log(parrafo2 + " -> get via getElementsByClassName");

console.log(inputNombre + " -> get via getElementsByName");
console.log(inputApellido + " -> get via getElementsByName");

console.log(elemento1 + " -> get via getElementsByTagName");
console.log(elemento2 + " -> get via getElementsByTagName");
console.log(elemento3 + " -> get via getElementsByTagName");

console.log(titulo2 + " -> get via querySelector");

console.log(parrafo1QA + " -> get via querySelectorAll");
console.log(parrafo2QA + " -> get via querySelectorAll");