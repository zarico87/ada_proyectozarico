const prompt = require("prompt-sync")();

// Pedir número al usuario
let numero = prompt("Ingresá un número: ");
numero = parseFloat(numero);



    // Determinamos si es par o impar
    if (numero % 2 === 0) {
        console.log("El número " + numero + " es PAR. Esto significa que es divisible por 2.");
    } else {
        console.log("El número " + numero + " es IMPAR. Esto significa que NO es divisible por 2.");
    }

