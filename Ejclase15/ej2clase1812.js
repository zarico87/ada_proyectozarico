


// Creamos una cadena de ejemplo

let descripPerro = " El Pastor Alemán es un perro muy inteligente y leal.  ";

console.log("Cadena original: " , `${descripPerro}`);

// PROPIEDADES

// 1. length: Devuelve la longitud de la cadena

console.log("Longitud de la cadena con length: " , descripPerro.length);

// Resultado: 55 (contando los espacios)

// 2 . indexOf : Delvuelve el primer indice donde se encuentra una subcadena (o -1 si no está)

let indiceInteligente = descripPerro.indexOf("inteligente");

console.log("índice de inteligente con indexOf: ", indiceInteligente);

// Resultado: 34

// MÉTODOS

// 3. slice: Extrae una parte de la cadena entre dos índices

let subcadena = descripPerro.slice(3,17);

console.log("Subcadena con slice 3,17 ", `${subcadena}`);

// Resultado: ¿ "Pastor Alemán" o  " Pastor Alemán" ?

// 4. trim: eliminar los espacios en blanco al inicio y al final

let cadenaSinEspacios = descripPerro.trim();

console.log("Cadena limpia con trim: ", `${cadenaSinEspacios}`);

// Resultado: COMPLETAR

// 5. replace: reemplaza una subcadena por otra

let cadenaReemplazada =descripPerro.replace("inteligente","valiente");

console.log("Cadena después de replace inteligente por valiente" , `${cadenaReemplazada}`);

// Resultado:

// 6. split: Divide un string en un array según un delimitador

let palabras =  descripPerro.split(" ");

console.log("Cadena dividida con split : " , palabras);

// Resultado: ¿["El" , "Pastor" , "Alemán"...] o ["", "" ,"El", "Pastor"...]?