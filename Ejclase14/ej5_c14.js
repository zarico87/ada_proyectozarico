//ponemos prompt para pedir datos al usuario
const prompt = require('prompt-sync')();


//pedimos datos al usuario
let marca = prompt("Ingrese la marca del auto:");


//funcion flecha para identificar el pais de origen

const origenAuto = (marca) => {
  if (
    marca === "Chevrolet" ||
    marca === "Ford" ||
    marca === "Fiat"
  ) {
    return "El auto es de origen nacional";
  } else {
    return "El auto es importado";
  }
};

//usamos la funcion flecha
let resultado = origenAuto(marca);


//mostramos el resultado
console.log(resultado);

