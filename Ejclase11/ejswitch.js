
// determinar que dia de la semana es segun un numero 

// importacion de la libreria prompt-sync
const prompt = require('prompt-sync')();

//entrada de datos, ingresar un numero del 1 al 7
//pedimos un numero y usamos parseInt xq switch compara valores exactos
//  para convertir el valor ingresado a entero

let numeroDia = parseInt(prompt("Ingrese un numero del 1 al 7 para saber el dia de la semana: "));

//estructura switch
//el switch evalua la variable que se pone entre parentesis (numeroDia)
//luego busca el case que coincida con el valor de la variable

switch (numeroDia) {
    case 1:
        console.log("El dia es Lunes, a TRABAJAR!"); 
        break; // es el freno de mano
        // si olvidamos el break , el programa sigue ejecutando, se llama efecto cascada
    case 2:
        console.log("El dia es Martes");    
        break;
    case 3:
        console.log("El dia es Miercoles,mitad de semana!"); 
        break;
    case 4:
        console.log("El dia es Jueves"); 
        break;
    case 5:
        console.log("El dia es Viernes, el mejor dia!"); 
        break;  

    case 6:
        console.log("El dia es Sabado, a DESCANSAR!"); 
        break;
    case 7:
        console.log("El dia es Domingo, a RELAJARSE!"); 
        break;  
    default:
        console.log("El numero ingresado no es valido, ingrese un numero del 1 al 7");  
        break;
}




