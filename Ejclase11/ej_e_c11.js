const prompt = require("prompt-sync")();

// Pedimos los valores al usuario
let numeroinicio = parseInt(prompt("Ingrese el número inicial: "));
let numerofin = parseInt(prompt("Ingrese el número final: "));



// Validamos que el inicio no sea mayor que el fin
if (numeroinicio > numerofin) {
    console.log("Valores inválidos: el número inicial no puede ser mayor que el final.");
} else {
    console.log(`Números pares entre ${numeroinicio} y ${numerofin}:`);

    // Recorremos el rango
    for (let i = numeroinicio; i <= numerofin; i++) {

        // Verificamos si es par
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}
