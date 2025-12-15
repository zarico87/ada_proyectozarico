const prompt = require("prompt-sync")();

//funcion declarada contarHasta
function contarHasta(n) { // la funcion recibe un numero n
    for (let i = 1; i <= n; i++) { //bucle desde 1 hasta n
        console.log(i); //muestra el numero actual
    }   
}

let numero = prompt("Ingresa un número hasta el cual contar: "); //pide al usuario un numero
contarHasta(numero); //llama a la funcion con el numero ingresado   
