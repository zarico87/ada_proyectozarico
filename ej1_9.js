<<<<<<< HEAD
const prompt = require("prompt-sync")();




let numero1 = prompt ("Ingrese un numero: "); // aqui pedimos los numeros
let numero2 = prompt ("Ingrese otro numero: ");
numero1 = parseFloat(numero1);// aqui convertimos los numeros de string a float
numero2 = parseFloat(numero2);  

if (numero1 > numero2) {  // aqui hacemos las comparaciones
    console.log ("El numero mayor es: " + numero1);
}else if (numero2 > numero1) {
    console.log ("El numero mayor es: " + numero2);
}else {
    console.log ("Los numeros son iguales");
}      
=======
const promt = require('prompt-sync')();

//pedimos al usuario que ingrese un numero

let numero = parseFloat(promt("Ingrese un numero: "));

//calculamos el doble del numero ingresado
let dobleNumero = numero * 2;
//mostramos el resultado
console.log("El doble de tu numero ingresado es: " + dobleNumero);
>>>>>>> 51428a2a36a02b6097170305397974739a1d491d
