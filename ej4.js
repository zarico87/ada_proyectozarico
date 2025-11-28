const prompt = require('prompt-sync')();

let numero = parseInt(prompt("Ingrese un numero entero: "));

//verificamos si el numero es par o impar
if (numero % 2 === 0) {
    console.log("El numero ingresado es par.");
} else {
    console.log("El numero ingresado es impar.");
}