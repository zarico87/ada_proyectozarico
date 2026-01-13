const prompt = require('prompt-sync')();

// Lista original de nombres
let nombres = ['Ana', 'Luis', 'Andrea', 'María'];

// Filtrar nombres que empiezan con la letra 'A'
let nombresConA = nombres.filter(function(nombre) {
    return nombre.charAt(0) === 'A';// verificamos si el primer caracter es 'A'
});

// Resultado
console.log(nombresConA);
