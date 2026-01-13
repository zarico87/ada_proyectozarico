const prompt = require('prompt-sync')();

let numeros=[1,2,3,4,5,6];
//usamos .filter() para crear un nuevo array con los numeros pares 
let numerosPares = numeros.filter(function(numero){ //aca aplicamos la funcion para filtrar los numeros pares
    return numero % 2 === 0;
});

console.log("El Array con numeros pares quedaria asi: " + numerosPares);       