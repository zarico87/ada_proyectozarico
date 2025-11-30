<<<<<<< HEAD
const prompt = require("prompt-sync")();

const nombremio= "Zarina";
let nombreUsuario = prompt("Ingrese su nombre: ");

if (nombreUsuario === nombremio) {
    console.log("¡Hola, Zarina! Bienvenida de nuevo.");
} else {
    console.log("Hola, " + nombreUsuario + ". Es un placer conocerte.");
=======
const prompt = require('prompt-sync')();

let numero = parseInt(prompt("Ingrese un numero entero: "));

//verificamos si el numero es par o impar
if (numero % 2 === 0) {
    console.log("El numero ingresado es par.");
} else {
    console.log("El numero ingresado es impar.");
>>>>>>> 51428a2a36a02b6097170305397974739a1d491d
}