// verificar si una persona es mayor de edad

// importacion de la libreria prompt-sync
const prompt = require('prompt-sync')();

// entrada de datos, ingresar la edad
let edad = parseInt(prompt("Ingrese su edad: "));

// logica con el if ternario- forma abreviada 
// Estructura: condicion ? valorSiVerdadero : valorSiFalso

// el signo de interrogacion (?) actua como un "if" (se cumple esto?) 
//  los dos puntos (:) como un "else" ( sino esto, haz esto otro )
let mensaje = (edad >= 21) ? "Eres mayor de edad." : "Eres menor de edad.";

// salida de datos
console.log(mensaje); 