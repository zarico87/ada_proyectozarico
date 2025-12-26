
// Ejercicio 9: Crear un array con modelos de autos, algunos repetidos
const modelosAutos = [
  "Fiesta",
  "Focus",
  "Corolla",
  "Fiesta",
  "Civic",
  "Focus",
  "Corolla"
];

//creamos una funcion que reciba un modelo de auto y retorne la ultima posicion en la que se encuentra en el array
function ultimaAparicionModeloAuto(modelo) {
  let ultimaPosicion = -1; // valor inicial (indica que no se encontró)


  //recorremos el array desde el final hacia el principio

  for (let i = 0; i < modelosAutos.length; i++) {
  if (modelosAutos[i] === modelo) {
    ultimaPosicion = i;
  }
}

//verificamos si se encontró el modelo
if (ultimaPosicion !== -1) {
  console.log(
    `El modelo ${modelo} aparece por última vez en la posición ${ultimaPosicion + 1}`
  );
} else {
  console.log(`El modelo ${modelo} no está presente en la lista`);
}
return ultimaPosicion;
}

//Ejemplo de uso
ultimaAparicionModeloAuto("Focus");
// → aparece por última vez en la posición 6

ultimaAparicionModeloAuto("Gol");
// → no está presente

