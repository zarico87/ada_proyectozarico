const prompt = require('prompt-sync')();

let numeros = [5, 8, 12, 20, 3];// definimos un array de numeros

let resultadoMayor = numeros.find(numero => numero > 10); // aca buscamos el primer numero mayor a 10 usando .find()

console.log("El primer numero mayor a 10 es: " + resultadoMayor);// mostramos el resultado