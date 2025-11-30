const prompt = require("prompt-sync")({ sigint: true });

const RANGO_MINIMO = 8;
const RANGO_MAXIMO = 48;

let numero = parseFloat(prompt("Ingrese un número: "));

if (numero >= RANGO_MINIMO && numero <= RANGO_MAXIMO) {
    console.log("El número está dentro del rango.");
} else {
    console.log("El número está fuera del rango.");
}
