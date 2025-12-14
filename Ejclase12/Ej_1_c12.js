const prompt = require("prompt-sync")();

// Inicializamos variables
let numero = 0;
let suma = 0;

// Pedimos el primer número
numero = parseFloat(prompt("Ingresá un número cualquiera (y un negativo para cortar): "));

// Mientras el número no sea negativo...
while (numero >= 0) {
    suma = suma + numero; // acumulamos
    numero = parseFloat(prompt("Ingresá otro número (y un negativo para cortar): "));
}

// Fuera del while → el usuario ingresó un número negativo
console.log("La suma total de los números ingresados es: " + suma);
