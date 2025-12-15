const prompt = require("prompt-sync")();

//funcion expresada calcularFactorial
const calcularFactorial = function (numero) {
    let resultado = 1; // varaible para guardar el resultado
    for (let i = numero; i >= 1; i--) {
        resultado = resultado * i; // Multiplica resultado por i en cada iteracion
    }
    return resultado; // Devuelve el factorial calculado
}

//aca usamos la funcion y mostramos el resultado
console.log("El factorial de 5 es:", calcularFactorial(5)); // Muestra el resultado llamando a la funcion   

