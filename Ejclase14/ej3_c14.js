//ponemos prompt para pedir datos al usuario
const prompt = require('prompt-sync')();

let edad = parseInt(prompt("Ingrese su edad:"));

//funcion flecha para indentificar a que segmento pertenece

const clasificarEdad = (edad) => {
  if (edad >= 0 && edad <= 12) {
    return "Niño";
  } else if (edad >= 13 && edad <= 17) {
    return "Adolescente";
  } else if (edad >= 18 && edad <= 64) {
    return "Adulto";
  } else if (edad >= 65) {
    return "Adulto mayor";
  } else {
    return "Edad inválida";
  }
};


//llamada a la funcion flecha
let resultado = clasificarEdad(edad);

//mostramos el resultado
console.log(`Usted es un: ${resultado}`);
