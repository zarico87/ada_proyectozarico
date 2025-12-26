//funcion flecha iva

//ponemos prompt para pedir datos al usuario
const prompt = require('prompt-sync')();



//pedimos datos al usuario
let precio = parseFloat(prompt("Ingrese el precio del producto:"));
let iva = parseFloat(prompt("Ingrese el porcentaje de IVA:"));

//funcion flecha para calcular el precio con IVA
const calcularPrecioConIVA = (precio, iva) => {
    return precio + (precio * iva / 100);
}

//llamada a la funcion flecha
let precioConIVA = calcularPrecioConIVA(precio, iva);
console.log(`El precio con IVA es: ${precioConIVA}`);

