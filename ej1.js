const prompt = require("prompt-sync")();




let numero1 = prompt ("Ingrese un numero: "); // aqui pedimos los numeros
let numero2 = prompt ("Ingrese otro numero: ");
numero1 = parseFloat(numero1);// aqui convertimos los numeros de string a float
numero2 = parseFloat(numero2);  

if (numero1 > numero2) {  // aqui hacemos las comparaciones
    console.log ("El numero mayor es: " + numero1);
}else if (numero2 > numero1) {
    console.log ("El numero mayor es: " + numero2);
}else {
    console.log ("Los numeros son iguales");
}      
