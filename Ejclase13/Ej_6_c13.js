const prompt = require("prompt-sync")();

//funcion para convertir horas a minutos, declarada


function convertirHorasAMinutos(horas) {// la funcion recibe las horas
    let minutos = horas * 60;   // convierte horas a minutos
    return minutos;//devuelve los minutos
}

let horas = 2; 
let resultado = convertirHorasAMinutos(horas);//llama a la funcion
console.log(horas + " horas son " + resultado + " minutos.");//muestramos resultado
