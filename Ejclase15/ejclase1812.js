//Creamos un array inicial con razas de perros

let razasPerros = ["Labrador" , "Cocker" , "Pug", "Beagle"];

console.log("Array inicial", razasPerros);

// 1. Método .push() Agregar un elemento más a mi array al final.

razasPerros.push("Caniche");

console.log("Después de push (Caniche): " , razasPerros);

// Resultado: ["Labrador" , "Cocker" , "Pug", "Beagle , "Caniche"]

// 2. Método .pop() Elimina el último elemento del array y lo devuelve.

let razaEliminada = razasPerros.pop();

console.log("Después de pop(): " , razasPerros);

console.log("Raza eliminada con pop es: ", razaEliminada);

// Resultado ["Labrador" , "Cocker" , "Pug", "Beagle"], Raza eliminada: "Caniche"

// 3. Método .shift() Elimina el primer elemento del array y lo devuelve.

let primeraRaza = razasPerros.shift();

console.log("Después de shift(): ", razasPerros);

console.log("Raza eliminada con shift: ", primeraRaza);

// Resultado: ["Cocker" , "Pug", "Beagle"] - Raza eliminada primera "Labrador"

// 4. Método .unshift() Agrega uno o más elementos al inicio del array

razasPerros.unshift("Doberman");

console.log("Después de unshift(): ", razasPerros);

// Resultado: ["Doberman", "Cocker" , "Pug", "Beagle"]

// 5. Método .join() Une todos los elementos del array en un string, y delimita con , si no se especifica

let razasString = razasPerros.join(' - ');

console.log("Array unido con string: ", razasString);

// Resultado: "Doberman - Cocker - Pug - Beagle"

// 6. Método .indexof() Devuelve el primer índice donde se encuentra el elemento (o si no -1)

let indiceCocker = razasPerros.indexOf("Cocker");

console.log("Raza con indice de Cocker en indexof: ", indiceCocker);

// Resultado: 1

let indiceFirulais = razasPerros.indexOf("Firulais");

console.log("Raza Firulais no encontrada", indiceFirulais)

// Resultado: -1

// 7. Método .lastindexof() Devuelve el último índice donde se encuentra el elemento

let razasDobles = ["Siberiano" , "Bulldog" , "Siberiano" , "Dálmata" , "Salchicha"];

console.log("Array con razas dobles: ", razasDobles);

let ultimoSiberiano = razasDobles.lastIndexOf("Siberiano");

console.log("Último indice de Siberiano con lastindexof: ", ultimoSiberiano);

// Resultado: 2

// 8. Método .includes() Delvuelve true si el elemento existe en el array, si no existe devuelve false

let tienePug = razasPerros.includes("Pug");

console.log("¿El array incluye Pug?", tienePug);

// Resultado: true

let tieneFirulais = razasPerros.includes("Firulais");

console.log("¿El array tiene Firulais? ", tieneFirulais);

// Resultado: False