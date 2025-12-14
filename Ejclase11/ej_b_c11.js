// aca llamamos a la libreria prompt-sync



const prompt = require("prompt-sync")();



let semaforoColor = prompt("Ingresa un color del semáforo (rojo, amarillo o verde): ");
// estructura switch para determinar la acción según el color del semáforo

switch (semaforoColor) {
    case "rojo":
        console.log("Alto, no puedes avanzar.");
        break;

    case "amarillo":
        console.log("Precaución, prepárate para avanzar.");
        break;

    case "verde":
        console.log("Avanza con seguridad.");
        break;

    default:
        console.log("Color no reconocido, ingresa rojo, amarillo o verde.");
        break;
}
