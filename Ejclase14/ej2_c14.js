//ponemos prompt para pedir datos al usuario
const prompt = require('prompt-sync')();

//pedimos datos al usuario
let nota1 = parseFloat(prompt("Ingrese la primera calificación:"));
let nota2 = parseFloat(prompt("Ingrese la segunda calificación:"));
let nota3 = parseFloat(prompt("Ingrese la tercera calificación:"));
let nota4 = parseFloat(prompt("Ingrese la cuarta calificación:"));
let nota5 = parseFloat(prompt("Ingrese la quinta calificación:"));

//funcion flecha para calcular el promedio
const calcularPromedio = (n1, n2, n3, n4, n5) => {
    return (n1 + n2 + n3 + n4 + n5) / 5;
}   

//usamos la funcion flecha
let promedio = calcularPromedio(nota1, nota2, nota3, nota4, nota5);
console.log(`El promedio de las calificaciones es: ${promedio}`);   