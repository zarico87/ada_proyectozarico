//ejercicio inventario

//inventario inicial
let inventario = ["Laptop", "Teclado", "Mouse", "Monitor"];
//agregamos impresora al final del array
inventario.push("Impresora");

//comprobamos si esta tablet en el inventario
if (inventario.includes("Tablet")) {
  console.log("Tablet está en el inventario.");
} else {
  console.log("Tablet no está en el inventario.");
}

//eliminamos el primer elemento del inventario
inventario.shift();
//se elimina laptop

//mostramos la lista en una sola cadena separada por comas
let inventarioTexto = inventario.join(", ");
console.log(inventarioTexto);

// Resultado:
// Tablet no está en el inventario.
// Teclado, Mouse, Monitor, Impresora
///////////////////////////////////////////////////////////


//dividiendo palabras

let oracion = "JavaScript es un lenguaje poderoso y versátil";
let palabras = oracion.split(" "); //split separa por espacios
//separamos la oracion en un array de palabras
console.log(palabras);  
// Resultado: ["JavaScript", "es", "un", "lenguaje", "poderoso", "y", "versátil"]
//creamos dos listas de arrays vacias
let palabrasCortas = [];
let palabrasLargas = [];

//clasificamos las palabras segun su longitud
for (let i = 0; i < palabras.length; i++) {
  if (palabras[i].length < 5) {
    palabrasCortas.push(palabras[i]);
  } else {
    palabrasLargas.push(palabras[i]);
  }
}
//mostramos los resultados
console.log("Palabras cortas:", palabrasCortas);
console.log("Palabras largas:", palabrasLargas);
// Resultado:
// Palabras cortas: [ 'es', 'un', 'y' ]
// Palabras largas: [ 'JavaScript', 'lenguaje', 'poderoso', 'versátil' ]    

///////////////////////////////////////////////////////////

//creamos la cola de clientes inicial
let clientes = ["Ana", "Carlos", "VIP", "Sofía", "Juan"];

let atendidos = 0;//contador de clientes atendidos

//atendemos a los clientes
while (clientes.length > 0) {
    let clienteActual = clientes.shift(); //eliminamos el primer cliente de la cola
    if (clienteActual === "VIP") {//verificamos si es cliente VIP
  console.log("Atendiendo cliente VIP con prioridad:", clienteActual);
} else {
  console.log("Atendiendo cliente:", clienteActual);
}
atendidos++;//incrementamos el contador
}   

//mostramos el total de clientes atendidos
console.log("Total de clientes atendidos:", atendidos);
// Resultado:   
// Atendiendo cliente: Ana
// Atendiendo cliente: Carlos
// Atendiendo cliente VIP con prioridad: VIP
// Atendiendo cliente: Sofía
// Atendiendo cliente: Juan
// Total de clientes atendidos: 5
///////////////////////////////////////////////////////////

