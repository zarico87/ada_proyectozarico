const prompt = require("prompt-sync")();

let edad = prompt("Ingrese su edad: ");
edad = parseInt(edad); // Convertimos el texto ingresado a número

if (edad >= 18) {
    console.log("Sos mayor de edad. Puedes salir solo/a y Beber alcohol.");
} else {
    console.log("Sos menor de edad.NO puedes hacer nada, Sorry!");
}
