const prompt = require("prompt-sync")();

//funcion expresada: se guarda en una variable, no empieza con function

const nombreCompleto = function (nombre, apellido) {
    return nombre + " " + apellido; // Devuelve el nombre completo
}   
let mensaje = nombreCompleto("Juan", "Pérez"); // Llama a la función
console.log("El nombre completo es:", mensaje); // Muestra el resultado
