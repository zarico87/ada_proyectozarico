//creamos el array 
let mascotas = ["Perro", "Gato", "Conejo"];

//agregamos hamster al inicio del array
mascotas.unshift("Hámster");

//atendemos a la primer mascota
let mascotaAtendida = mascotas.shift();

//mostramos los resultados
console.log("Mascota atendida:", mascotaAtendida);
console.log("Lista actualizada:", mascotas);
// Resultado: Mascota atendida: Hámster
// Lista actualizada: ["Perro", "Gato", "Conejo"]