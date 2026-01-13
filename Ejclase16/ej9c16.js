const prompt = require('prompt-sync')();

// Lista de palabras
let palabras = ['sol', 'luna', 'estrella'];

// Contar la cantidad total de letras con .reduce()
let totalLetras = palabras.reduce(function(acumulador, palabra) {// aca aplicamos la funcion para contar las letras
    return acumulador + palabra.length; // sumamos la longitud de cada palabra al acumulador
}, 0);// el 0 es el valor inicial del acumulador

// Resultado
console.log(totalLetras);
