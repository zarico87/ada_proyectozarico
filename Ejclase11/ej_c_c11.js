const prompt = require("prompt-sync")();

let numero = prompt("Ingresa un número positivo: ");
numero = parseInt(numero);

// Validamos que sea positivo
if (numero > 0) {
    console.log("Contando desde 1 hasta " + numero + "...");
    
    for (let i = 1; i <= numero; i++) {
        console.log(i);
    }

} else {
    console.log("El número debe ser positivo.");
}


