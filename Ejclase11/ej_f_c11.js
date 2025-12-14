const prompt = require("prompt-sync")();

let numero = prompt("Ingresa un número para ver su tabla de multiplicar: "); // Pedimos el número al usuario
numero = parseFloat(numero);//convertimos el valor ingresado a un numero 

console.log(`Tabla de multiplicar del ${numero}:`);

for (let i = 1; i <= 10; i++) {// aca se cuenta del 1 al 10
    let resultado = numero * i; // aca se imprime el resultado de la multiplicacion
    console.log(`${numero} x ${i} = ${resultado}`);
}

