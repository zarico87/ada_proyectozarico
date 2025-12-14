const prompt = require("prompt-sync")();

let numero = parseInt(prompt("Ingrese un número entero positivo: "));

for (let i = 1; i <= 100; i++) {
    if (i % numero === 0) {
        console.log(i);
    }
}
