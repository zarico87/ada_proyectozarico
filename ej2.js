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

