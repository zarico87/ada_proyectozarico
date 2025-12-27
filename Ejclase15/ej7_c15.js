//creamos el array
let comidas = ["Pizza", "Hamburguesa", "Tacos"];

//verificamo si esta sushi en el array
let estaSushi = comidas.includes("Sushi");

//mostramos el resultado con un if y frases 
if (estaSushi) {
  console.log("Sushi está en la lista.");
} else {
  console.log("Sushi no está en la lista.");
}

// Resultado: Sushi no está en la lista.
