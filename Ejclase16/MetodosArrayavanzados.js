const prompt = require('prompt-sync')();

//METODOS AVANZADOS DE ARRAYS

//.map() crea un nuevo array con los rdos de la funcion aplicada a cada elemento.

let notas =[10,4,5,8,9,2,7];

let notasHastaCien = notas.map(function(numero){
    return numero * 10;
}); 
console.log(notasHastaCien); // [100, 40, 50, 80, 90, 20, 70]

//.filter() crea un nuevo array con los elementos que cumplan la condicion dada 
// en una funcion de tipo filtro.

let notasAprobadas = notas.filter(function(numero){
    return numero >= 4;
}
);
console.log(notasAprobadas); // [10, 4, 5, 8, 9, 7]

//.reduce() reduce a un valor unico un array aplicando una funcion a un acumulador y a cada
// elemento del array.

let sumaNotas = notas.reduce(function(acumulador, numero){
    return acumulador + numero;
}, );
console.log(sumaNotas); // 45  -- suma todos los numeros del array

//.forEach() iterar sobre un array pero no devuelve nada

notas.forEach(function(valor, indice){
    console.log(`En la posicion:  `+ indice + ` tengo el valor :` + valor);
});

//.find() Encuentra el primer elemento en el array  que cumple con la condicion 

let notaEncontrada = notas.find(function(numero){
    return numero >= 8;
});
console.log("la primer nota mayor o igual a 8 es: " +notaEncontrada); 
// 10  -- el primer numero que cumple la condicion


