<<<<<<< HEAD


const prompt = require("prompt-sync")();

let condicion1 = prompt("Ingresá true o false para la primera condición: ") === "true";
let condicion2 = prompt("Ingresá true o false para la segunda condición: ") === "true";

console.log("condicion1 AND condicion2:", condicion1 && condicion2);
console.log("condicion1 OR condicion2:", condicion1 || condicion2);
console.log("NOT condicion1:", !condicion1);
console.log("NOT condicion2:", !condicion2);
=======
const prompt = require('prompt-sync')();
// pedimos al usuario que ingrese dos numeros

let primerNum = parseFloat(prompt("Ingrese el primer numero: "));
let segundoNum = parseFloat(prompt("Ingrese el segundo numero: "));

//calculamos la suma de los dos numeros
let suma = primerNum + segundoNum;
//mostramos el resultado
console.log("La suma de los dos numeros ingresados es: " + suma);
>>>>>>> 51428a2a36a02b6097170305397974739a1d491d
