const promt = require('prompt-sync')();

//pedimos al usuario que ingrese un numero

let numero = parseFloat(promt("Ingrese un numero: "));

//calculamos el doble del numero ingresado
let dobleNumero = numero * 2;
//mostramos el resultado
console.log("El doble de tu numero ingresado es: " + dobleNumero);