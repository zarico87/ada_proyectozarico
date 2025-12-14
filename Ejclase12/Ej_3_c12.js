const prompt = require("prompt-sync")();

let x = parseInt(prompt("Ingresá un número X que sea positivo: "));
let contadorImpares = 0;

for (let i = 0; i <= x; i++) {
    if (i % 2 !== 0) {   
        contadorImpares++;
    }
}

console.log(`La cantidad de números impares desde 0 hasta ${x} (inclusive) es: ${contadorImpares}`);
