// vamos a crear un programa que imprima un contador progresivo
//desde 5 hs hasta 1 usando tanto el while como el do while

//no uso la libreria porque no se le pide nada al usuario

//const prompt = require("prompt-sync")();

// Usando while 
console.log("Contador regresivo usando while:");
let contador = 5;   
while (contador >= 1) {
    console.log(contador);
    contador--;// aqui es regresivo por eso se pone --
}     

// Usando do while
console.log("Contador regresivo usando do while:");
let contador2 = 5;  
do {
    console.log(contador2);
    contador2--;// aqui es regresivo por eso se pone --
} while (contador2 >= 1);