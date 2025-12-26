const prompt = require("prompt-sync")();

//creamos el array vacio

let floresFavoritas = [];

//pedimos las flores al usuario y ponemos los indices no usamos push

floresFavoritas[0] = prompt("Ingresa tu primera flor favorita:");
floresFavoritas[1] = prompt("Ingresa tu segunda flor favorita:");
floresFavoritas[2] = prompt("Ingresa tu tercera flor favorita:");
floresFavoritas[3] = prompt("Ingresa tu cuarta flor favorita:");


//pedimos la flor a buscar

let florBuscada = prompt("Ingresa una flor para verificar si está entre tus favoritas:");

//contamos cuantas veces aparece la flor

let contador = 0;//inicializamos el contador

for (let i = 0; i < floresFavoritas.length; i++) { //recorremos el array
  if (floresFavoritas[i] === florBuscada) {
    contador++;
  }
}

//mostramos el resultado
console.log(
  `La flor "${florBuscada}" fue mencionada ${contador} vez/veces entre tus favoritas`
);

