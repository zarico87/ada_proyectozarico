const prompt = require('prompt-sync')();

//declaramos el array

let numeros=[2,4,6,8];

//usamos .map() para multiplicar cada elemento por su mismo numero y crear un nuevo array
let numerosAlCuadrado = numeros.map(function(numero){
    return numero * numero;
}); 


console.log(" El array al cuadrado quedaria : " + numerosAlCuadrado);
