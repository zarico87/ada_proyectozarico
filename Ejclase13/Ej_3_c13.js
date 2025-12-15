const prompt = require("prompt-sync")();

let SaludoGlobal="Hola , desde el scope global"; // variable global

function mostrarMensaje() { //aqui creamos la funcion
    let SaludoLocal="Hola , desde el scope local"; // variable local
    console.log(SaludoLocal); // muestra la variable local
    console.log(SaludoGlobal); // muestra la variable global    
}

mostrarMensaje(); // llamamos a la funcion para que se ejecute