
// aca llamamos a la libreria prompt-sync
const prompt = require('prompt-sync')();

let numeronuevo = parseFloat(prompt("Ingrese un numero a : ")); // aqui pedimos el numero


// aqui clasificamos el numero segun su valor
if (numeronuevo > 0) {  
    console.log("El número es POSITIVO.");
} else if (numeronuevo < 0) {
    console.log("El número es NEGATIVO.");
} else {
    console.log("El número es CERO.");
}
