const prompt = require("prompt-sync")();

let horaActual = 14;// variable global

function mostrarSaludo() { //aqui creamos la funcion
    if (horaActual < 12) {
        console.log("Buenos días"); // muestra saludo de la mañana
    } else if (horaActual < 18){
        console.log("Buenas tardes"); // muestra saludo de la tarde
    } else {
        console.log("Buenas noches"); // muestra saludo de la noche
    }

}

mostrarSaludo(); // llamamos a la funcion para que se ejecute