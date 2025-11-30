<<<<<<< HEAD
const prompt = require("prompt-sync")({ sigint: true });

const RANGO_MINIMO = 8;
const RANGO_MAXIMO = 48;

let numero = parseFloat(prompt("Ingrese un número: "));

if (numero >= RANGO_MINIMO && numero <= RANGO_MAXIMO) {
    console.log("El número está dentro del rango.");
} else {
    console.log("El número está fuera del rango.");
}
=======
const prompt = require('prompt-sync')();

//pedimos al usuario que ingrese un numero
let numero = parseFloat(promt("Ingrese un numero: "));

//verificamos si el numero es positivo, negativo o cero
if (numero > 0) {
    console.log("El numero ingresado es positivo.");
} else if (numero < 0) {
    console.log("El numero ingresado es negativo.");
} else {
    console.log("El numero ingresado es cero.");
}

>>>>>>> 51428a2a36a02b6097170305397974739a1d491d
