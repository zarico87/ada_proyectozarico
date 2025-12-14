const prompt = require("prompt-sync")();

let notas = [];// aca creamos array vacio para guardar las notas



for (let i = 0; i < 5; i++) {//aqui se repite 5 veces

    numero = parseFloat(prompt("Ingrese una nota entre 0 y 10 : "));//aqui pedimos la nota
    
     
    while (numero < 0 || numero > 10) { //validacion de  la nota

        
        console.log("Nota inválida. Intente nuevamente.");// si la nota es invalida
        numero = parseFloat(prompt("Ingrese una nota entre 0 y 10 : "));// aqui volvemos a pedir la nota
    }   
     notas[i] = numero;//se guarda el numero en el array cuando ya se valido
}


console.log("Las notas ingresadas son: " + notas);
