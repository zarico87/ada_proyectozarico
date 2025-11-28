const prompt = require('prompt-sync')();
// pedimos al usuario que ingrese dos numeros

let primerNum = parseFloat(prompt("Ingrese el primer numero: "));
let segundoNum = parseFloat(prompt("Ingrese el segundo numero: "));

//calculamos la suma de los dos numeros
let suma = primerNum + segundoNum;
//mostramos el resultado
console.log("La suma de los dos numeros ingresados es: " + suma);