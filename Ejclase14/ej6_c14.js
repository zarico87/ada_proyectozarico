//ponemos prompt para pedir datos al usuario
const prompt = require('prompt-sync')();

//creamos el objeto con sus propiedades
let deportista = { // objeto deportista
  nombre: "Juan", // propiedad nombre
  energia: 100, // propiedad energia
  experiencia: 0, // propiedad experiencia

  entrenarHoras: function (horas) {   // método para entrenar
    this.energia = this.energia - (horas * 5); // disminuye energia
    this.experiencia = this.experiencia + (horas * 2);// aumenta experiencia
  }
};

//llamamos a la funcion
deportista.entrenarHoras(3);
console.log("Después de entrenar 3 horas:");
console.log("Energía:", deportista.energia);    
console.log("Experiencia:", deportista.experiencia);


