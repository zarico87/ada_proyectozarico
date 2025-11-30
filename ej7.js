const prompt = require("prompt-sync")();

// Pedir peso al usuario
let kilos = prompt("Ingrese su peso en kilogramos: ");

// Convertir el texto ingresado a número
kilos = parseFloat(kilos);

// Convertir a libras
const libras = kilos * 2.20462;

// Mostrar resultado
console.log(kilos + " kg equivalen a " + libras.toFixed(2) + " libras.");
