//creamos los objetos con sus propiedades

let libro1 = {
  titulo: "El Principito",
  autor: "Antoine de Saint-Exupéry",
  anioPublicacion: 1943
};

let libro2 = {
  titulo: "Cien años de soledad",
  autor: "Gabriel García Márquez",
  anioPublicacion: 1967
};

//creamos un array 
let libros = [libro1, libro2];

//creamos la funcion para mostrar los libros

function mostrarLibro(arregloLibros) {
  for (let i = 0; i < arregloLibros.length; i++) {
    console.log(
      "Título: " + arregloLibros[i].titulo +
      " | Autor: " + arregloLibros[i].autor +
      " | Año: " + arregloLibros[i].anioPublicacion
    );
  }
}

//llamamos a la funcion
mostrarLibro(libros);