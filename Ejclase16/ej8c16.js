const prompt = require('prompt-sync')();

// Lista de nombres
let nombres = ['Carlos', 'Daniel', 'Laura', 'Ana'];

// Buscar el nombre 'Laura'
let nombreBuscado = nombres.find(function(nombre) {// aca buscamos el nombre 'Laura' usando .find()
    return nombre === 'Laura';// verificamos si el nombre es 'Laura'
});

// Resultado
console.log(nombreBuscado);
