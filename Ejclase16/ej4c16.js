const prompt = require('prompt-sync')();

const numeros = [1, 2, 3, 4];//definimos un array de numeros

// Usamos .reduce() para sumar todos los numeros del array

const total = numeros.reduce((acumulador, numero) => {//aca aplicamos la funcion para sumar los numeros
  return acumulador + numero;// retornamos la suma
}, 0); // el 0 es el valor inicial del acumulador

console.log(total);
