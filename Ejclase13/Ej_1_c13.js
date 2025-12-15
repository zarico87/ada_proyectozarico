const prompt = require("prompt-sync")();


// Función para calcular el área de un triángulo, la creamos

function calcularAreaTriangulo(base, altura) {
       let area = (base * altura) / 2; // calcumos el área
    return area;        //nos devuelve el área
}

   //aqui llamamos a la funcion y mostramos el resultado
let resultado = calcularAreaTriangulo(10, 5);
console.log("El área del triángulo es: " + resultado);

