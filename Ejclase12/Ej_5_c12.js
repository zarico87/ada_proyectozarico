const prompt = require("prompt-sync")();

let nombres = [];// aca creamos array vacio para guardar los nombres

//nombres[i] = prompt("Ingrese un nombre: ");//aqui pedimos el primer nombre y lo guardamos en el array


for (let i = 0; i < 5; i++) {//aqui se repite 5 veces

nombres[i] = prompt("Ingrese un nombre: ");//aqui pedimos el primer nombre y lo guardamos en el array

while (nombres[i].length < 3) { //validacion del nombre
  console.log("Nombre inválido. Intente nuevamente.Tiene que tener al menos 3 letras");// si el nombre es invalido
  nombres[i] = prompt("Ingrese un nombre: ");// aqui volvemos a pedir el nombre y lo guardamos en el array
}

}
let nombreBuscado = prompt("Ingrese un nombre a buscar: ");//aca buscamos un nombre
let encontrado = false;// inicializamos variable encontrado en false

for (let i = 0; i < nombres.length; i++) {//recorremos el array con un metodo for 
if (nombres[i] === nombreBuscado) {
       encontrado = true; 
}
}
if (encontrado) {
  console.log("El nombre " + nombreBuscado + " se encuentra en la lista.");
} else {
  console.log("El nombre " + nombreBuscado + " NO se encuentra en la lista.");
}

console.log("Los nombres ingresados son: " + nombres);

