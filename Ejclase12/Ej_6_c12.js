const prompt = require("prompt-sync")();//aca no es necesario el prompt pero lo dejo igual

let matriz = [
    [10,3,2,1,4,7],
    [5,5,10,100,4],
    [5,125,10,1020,4],
    [5,5,5097,100,4]
];

suma=0;// variable para la suma de todos los elementos

for (let i = 0; i < matriz.length; i++) { // recorre las filas
    for (let j = 0; j < matriz[i].length; j++) { // recorre las columnas
        if  (matriz[i][j] >= 10 && matriz[i][j] < 1000) {
        {    // condicion para sumar solo los elementos entre 10 y 1000
            suma = suma + matriz[i][j]; // suma de los elementos que cumplen la condicion
        }   

    }
}
}
console.log("La suma de los elementos entre 10 y 1000 es: " + suma);