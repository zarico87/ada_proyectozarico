const prompt = require("prompt-sync")();

//funcion expresada Farhenheit a Celsius

const convertirCelsiusAFarhenheit = function (celsius) {
    return (celsius * 9/5) + 32; // Devuelve la conversion a Farhenheit
}   
let mensaje = convertirCelsiusAFarhenheit(25); // Llama a la función
console.log("25 grados Celsius son:", mensaje, "grados Farhenheit"); // Muestra el resultado    

