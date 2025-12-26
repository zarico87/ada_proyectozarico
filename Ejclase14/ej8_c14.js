function backEnd(num1, num2) {  //funcion backend que recibe dos numeros
  for (let i = 1; i <= 100; i++) { //bucle que recorre del 1 al 100
    if (i % num1 === 0 && i % num2 === 0) {//condicion que verifica si el numero es multiplo de ambos numeros
      console.log("Back End");
    } else if (i % num1 === 0) {//condicion que verifica si el numero es multiplo del primer numero
      console.log("Back");
    } else if (i % num2 === 0) {//condicion que verifica si el numero es multiplo del segundo numero
      console.log("End");
    } else {
      console.log(i);
    }
  }
}


//Ejemplo de uso
backEnd(3, 5); //llamada a la funcion con los numeros 3 y 5 
