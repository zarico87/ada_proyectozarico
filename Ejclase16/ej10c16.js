
const prompt = require('prompt-sync')();


// Lista de palabras
let palabras = ['Me', 'gusta', 'aprender', 'JavaScript'];

// Construir la frase completa
let frase = palabras.reduce(function(acumulador, palabra) {
    return acumulador + ' ' + palabra;
});

// Resultado
console.log(frase);
