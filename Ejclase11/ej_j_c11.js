const prompt = require("prompt-sync")();

const secreto = Math.floor(Math.random() * 10) + 1;  
//math.floor redondea hacia abajo y math.random genera un numero aleatorio entre 0 y 1
//el numero secreto es constante y es un numero aleatorio entre 1 y 10

for (let i = 1; i <= 3; i++) {
    let intento = Number(prompt("Adivina el número: "));

    if (intento === secreto) {
        console.log("¡Ganaste!");
        break;
    }

    if (i === 3) {
        console.log("Perdiste. El número era " + secreto);
    }
}
