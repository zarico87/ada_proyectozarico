const prompt = require("prompt-sync")();

let num1 = parseFloat(prompt("Ingresa el primer número: "));
let num2 = parseFloat(prompt("Ingresa el segundo número: "));
let operacion = prompt("Ingresa la operación (suma, resta, multiplicacion, division) que quieras: ");

switch (operacion) {
    case "suma":
        console.log("El Resultado es:", num1 + num2);
        break;
    case "resta":
        console.log("El Resultado es:", num1 - num2);
        break;
    case "multiplicacion":
        console.log("El Resultado es:", num1 * num2);
        break;
    case "division":
        if (num2 === 0) {
            console.log("No se puede dividir por cero.");
        } else {
            console.log(" El Resultado es:", num1 / num2);
        }
        break;
    default:
        console.log("Operación inválida.");
}
