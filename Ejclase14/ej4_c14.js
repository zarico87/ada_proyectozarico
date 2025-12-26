//ponemos prompt para pedir datos al usuario
const prompt = require('prompt-sync')();


//pedimos datos al usuario
let cantidad = parseInt(prompt("Ingrese la cantidad de productos:"));
let precioUnitario = parseFloat(prompt("Ingrese el precio unitario:"));


//funcion flecha para ver los descuentos

const calcularTotalConDescuento = (cantidad, precio) => {
  let total = cantidad * precio;

  if (cantidad >= 10) {
    total = total * 0.8; // 20% descuento
  } else if (cantidad >= 5) {
    total = total * 0.9; // 10% descuento
  }

  return total;
};

//usamos la funcion flecha
let totalFinal = calcularTotalConDescuento(cantidad, precioUnitario);

//mostramos el resultado
console.log(`El total a pagar con descuento es: ${totalFinal}`);