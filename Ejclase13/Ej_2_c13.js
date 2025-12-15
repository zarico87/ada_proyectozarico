const prompt = require("prompt-sync")();

//funcion expresada: se guarda en una variable, no empieza con function
const encontrarMayor = function (a, b) {
    if (a > b) {  // aqui hacemos la comparacion
        return a; // Devuelve 'a' si es mayor
    } else {
        return b; // Devuelve 'b' si es mayor o igual
    }   
};

//aqui llamamos a la funcion y mostramos el resultado
let resultado = encontrarMayor(15, 25); // Llama a la función
console.log("El mayor entre 15 y 25 es:", resultado);// mostramos el resultado