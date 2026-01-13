//Math.round
/*Dado este número:
let number = 4.7;
Mostrá por consola:
The rounded number is: 5
📌 Tip: Math.round() redondea al entero más cercano.*/ 

let number = 4.7;
let roundedNumber = Math.round(number); 
console.log(`The rounded number is: ${roundedNumber}`);


//Math.random & Math.floor: Número aleatorio simple
//Generar un número aleatorio entre 0 y 9 y mostrarlo en consola.
/*Math.random() → devuelve un número mayor o igual a 0 y menor que 1  
Math.floor(...)
Redondea hacia abajo ⬇️ */

let randomNumber = Math.floor(Math.random() * 10);
console.log(randomNumber);

//Math.random & Math.floor: Número aleatorio entero
//Generar un número entero aleatorio entre 1 y 6 (como un dado 🎲)

let dieNumber = Math.floor(Math.random()*6) + 1; 
console.log(dieNumber);

//Math.abs: Valor absoluto 
/*Dado este número:
let temperature = -12;
Mostrá en consola:
The absolute temperature is: 12*/

let temperature = -12;

let absoluteTemperature = Math.abs(temperature); 
console.log(absoluteTemperature);

//Math.max y Math.min: Valores Maximos y Minimos 
/*Con estos valores:
let a = 5;
let b = 12;
let c = 3;
Mostrá:
Max value: 12
Min value: 3*/

let a = 5;
let b = 12;
let c = 3;

let maxValue = Math.max(a, b, c); 
console.log(maxValue);

let minValue = Math.min(a, b, c); 
console.log(minValue);

//Bucle + Math: For + Math.random()
/*👉 Objetivo:
Simular 5 tareas y asignar a cada una un progreso aleatorio entre 0 y 100.

Ejemplo de salida:
Task 1 progress: 73%
Task 2 progress: 41%
...

📌 Pista:
Math.floor(Math.random() * 101)*/

for(let i = 1; i <= 5; i ++){
    let progress = Math.floor(Math.random()*101); 
    console.log(`Task ${i} progress: ${progress}`)
}

/*🧠 Regla de oro (guardala)

👉 Para generar números entre 0 y N (incluido)

Math.floor(Math.random() * (N + 1))

👉 Ejemplo:
0 a 100 → * 101
0 a 10 → * 11
0 a 6 → * 7
*/