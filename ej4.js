const prompt = require("prompt-sync")();

const nombremio= "Zarina";
let nombreUsuario = prompt("Ingrese su nombre: ");

if (nombreUsuario === nombremio) {
    console.log("¡Hola, Zarina! Bienvenida de nuevo.");
} else {
    console.log("Hola, " + nombreUsuario + ". Es un placer conocerte.");
}