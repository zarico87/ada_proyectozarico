const prompt = require("prompt-sync")();// llamamos a la libreria prompt-sync

let contrasenia;// definimos la variable

do {
    contrasenia = prompt("Ingrese la contraseña: ");//pedimos al usuario que ingrese la contraseña

    if (contrasenia !== "1234") { // verificamos si la contraseña es incorrecta
        console.log("Contraseña incorrecta. Intenta nuevamente.");// mensaje de error porque la contraseña es incorrecta
    }

} while (contrasenia !== "1234");// el ciclo se repite hasta que la contraseña sea correcta

console.log("¡Ingreso exitoso!");// mensaje de exito cuando la contraseña es correcta

