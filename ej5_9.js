<<<<<<< HEAD
const prompt = require("prompt-sync")();

console.log("Vamos a comparar tres números para encontrar el mayor.");
let numero1 = prompt ("Ingrese el primer numero: "); // aqui pedimos los numeros
let numero2 = prompt ("Ingrese el segundo numero: ");
let numero3 = prompt ("Ingrese el tercer numero: ");
numero1 = parseFloat(numero1);// aqui convertimos los numeros de string a float
numero2 = parseFloat(numero2);
numero3 = parseFloat(numero3);  

if (numero1 >= numero2 && numero1 >= numero3) {  // aqui hacemos las comparaciones  
    console.log ("El numero mayor es: " + numero1);

}else if (numero2 >= numero1 && numero2 >= numero3) {
    console.log ("El numero mayor es: " + numero2);
}else {
    console.log ("El numero mayor es: " + numero3);
}   
=======
const prompt = require('prompt-sync')();

//pedimos al usuario que ingrese su nombre
let nombre = prompt("Ingrese su nombre: ");
//mostramos un saludo personalizado
console.log("Hola, " + nombre + "! Bienvenido/a. a ADA");
>>>>>>> 51428a2a36a02b6097170305397974739a1d491d
