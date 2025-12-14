const prompt = require("prompt-sync")();//aca no es necesario el prompt pero lo dejo igual

let matriz = [ // definimos la matriz 5x5
    [11,34,2,1,42],
    [15,5,20,100,4],
    [52,12,18,100,4],
    [6,9,509,100,4],
    [7,8,90,10,4]
];

let suma=0;// variable para la suma de todos los elementos

for (let i = 0; i < matriz.length; i++) { // recorre las filas
    for (let j = 0; j < matriz[i].length; j++) { // recorre las columnas
        suma = suma + matriz[i][j]; // suma de todos los elementos
    }   
}
console.log("La suma de todos los elementos de la matriz es: " + suma);