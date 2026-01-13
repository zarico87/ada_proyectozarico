const prompt = require('prompt-sync')();


// Lista original de palabras
let palabras = ['hola', 'mundo', 'javascript'];

// Transformación usando map para devolver una nueva lista con signos de exclamación
let palabrasTransformadas = palabras.map(function(palabra) {
    return '¡' + palabra + '!';
});

// Resultado
console.log(palabrasTransformadas);
