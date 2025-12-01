const prompt = require("prompt-sync")();

// Pedimos los 3 lados al usuario
let lado1 = parseFloat(prompt("Ingrese el lado 1: "));
let lado2 = parseFloat(prompt("Ingrese el lado 2: "));
let lado3 = parseFloat(prompt("Ingrese el lado 3: "));

// Verificamos si los valores ingresados forman un triángulo real:
if (lado1 + lado2 <= lado3 || lado1 + lado3 <= lado2 || lado2 + lado3 <= lado1) {
    console.log("Los valores ingresados NO forman un triángulo.");
} else {
    // Clasificación del triángulo
    if (lado1 === lado2 && lado2 === lado3) {
        console.log("El triángulo es EQUILÁTERO.");
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        console.log("El triángulo es ISÓSCELES.");
    } else {
        console.log("El triángulo es ESCALENO.");
    }
}
