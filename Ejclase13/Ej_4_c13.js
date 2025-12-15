const prompt = require("prompt-sync")();

function esPar(numero) {


     let resultado = "El número " + numero + ": "; // Prepara el mensaje inicial
     
    if (numero % 2 === 0) { // Si el número es divisible entre 2

        return resultado + "Es Par"; // Devuelve "Es par"   
    } else {

        return resultado + "Es Impar"; // Devuelve "Es impar"
    } 

   
}

console.log(esPar(4));
console.log(esPar(7));
