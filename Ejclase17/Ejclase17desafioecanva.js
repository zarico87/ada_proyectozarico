const prompt = require("prompt-sync")();

//Juego del numero secreto del 1 al 5
// como math.random genera numeros entre el 0 y el 1(exclusive)
//usamos el math.floor para redondear hacia abajo y multiplicamos por 5 
//para obtener un rango de 0 a 4


let numeroSecreto = Math.floor(Math.random() * 5) + 1; 
let intento = parseInt(prompt("Adiviná el número secreto (1 al 5): "));

if (intento === numeroSecreto) { // aca comparamos el numero ingresado con el numero secreto
    console.log("🎉 ¡Correcto! Adivinaste el número.");
} else {
    console.log("❌ Incorrecto. El número era: " + numeroSecreto);
}

//El juego es simple, el usuario tiene que adivinar el numero secreto generado aleatoriamente entre 1 y 5.
//Si el usuario acierta, se le felicita; si no, se le informa del numero correcto.


