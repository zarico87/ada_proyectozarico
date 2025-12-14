const prompt = require("prompt-sync")();    

//matriz base 10x10
let matriz = [];
let contador = 1;

for (let i = 0; i < 10; i++) { //recorremos filas
  let fila = [];
  for (let j = 0; j < 10; j++) {//recorremos columnas
    fila.push(contador);//agregamos el numero y aumentamos el contador
    contador++;
  }
  matriz.push(fila);//agregamos la fila a la matriz
}
//funcion para sumar la diagonal roja
function sumarDiagonalRoja(matriz) {
  let diagonal = [];
  let suma = 0;

  for (let i = 0; i < matriz.length; i++) {// recorremos la matriz
    diagonal.push(matriz[i][i]);// agregamos el elemento de la diagonal roja
  }

  for (let i = 0; i < diagonal.length; i++) {// recorremos la diagonal roja
    suma += diagonal[i];// sumamos los elementos
  }

  return suma;
}
//funcion para sumar la diagonal verde
function sumarDiagonalVerde(matriz) {
  let diagonal = [];
  let suma = 0;

  for (let i = 0; i < matriz.length; i++) {// recorremos la matriz
    diagonal.push(matriz[i][matriz.length - 1 - i]);// agregamos el elemento de la diagonal verde
  }

  for (let i = 0; i < diagonal.length; i++) {// recorremos la diagonal verde
    suma += diagonal[i];
  }

  return suma;
}
//mostrar resultados
console.log("Suma diagonal roja:", sumarDiagonalRoja(matriz));
console.log("Suma diagonal verde:", sumarDiagonalVerde(matriz));
