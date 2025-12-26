// ej 1: funcion normal
//recibe un parametro num y develve el valor de ese num multiplicado por 2  
function multiplicarPorDos(num) {
    return num * 2;
}

//llamada a la funcion normal para que imprima el resultado
console.log(multiplicarPorDos(5)); // Output: 10

// ej 2: funcion arrow
// tiene una sintesis mas compacta pero hace lo mismo
const multiplicarPorDosArrow = (num) => num * 2;

//llamada a la funcion arrow para que imprima el resultado
console.log(multiplicarPorDosArrow(5)); // Output: 10   

//ej 3:
//funcion arrow mas simple(sin llaves y return implicito)
//este version usa una sintaxis aun mas breve donde el return es implicito
//lo que significa que no hay que escribir return ni llaves {} si
//la funcion tiene una sola expresion
const multiplicarPorDosArrowSimple = num => num * 2;

//llamada a la funcion arrow simple para que imprima el resultado
console.log(multiplicarPorDosArrowSimple(5)); // Output: 10

