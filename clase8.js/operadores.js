//operadores aritméticos

let a = 10;
let b = 2;
console.log("Suma: " + (a + b));    
console.log("Resta: " + (a - b));    
console.log("Multiplicación: " + (a * b));    
console.log("División: " + (a / b));    
console.log("Módulo: " + (a % b));    
console.log("Exponenciación: " + (a ** b));    

//operadores de comparación
console.log("¿a es igual a b? " + (a == b));    
console.log("¿a es diferente de b? " + (a != b));    
console.log("¿a es mayor que b? " + (a > b));    
console.log("¿a es menor que b? " + (a < b));    
console.log("¿a es mayor o igual que b? " + (a >= b));    
console.log("¿a es menor o igual que b? " + (a <= b));
console.log("¿a es estrictamente igual a b? " + (a === b));    
console.log("¿a es estrictamente diferente de b? " + (a !== b));

//operadores lógicos
let c = true;
let d = false;  
//&& (AND), || (OR), ! (NOT)
console.log("c AND d: " + (c && d));  //para que devualva true, ambos deben ser true  
console.log("c OR d: " + (c || d));    
console.log("NOT c: " + (!c));  