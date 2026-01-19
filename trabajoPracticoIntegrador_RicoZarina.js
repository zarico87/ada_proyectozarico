//instalamos prompt para recibir datos por consola
const prompt = require('prompt-sync')();

//primero creamos un array de libros con sus respectivas propiedades
 
//Ej 1
//a)
// Array de libros de la biblioteca
// Cada libro tiene: id, titulo, autor, anio, genero y disponible
let libros = [
  { id: 1, titulo: "El principito", autor: "Antoine de Saint-Exupéry", anio: 1943, genero: "Ficción", disponible: true },
  { id: 2, titulo: "Cien años de soledad", autor: "Gabriel García Márquez", anio: 1967, genero: "Novela", disponible: true },
  { id: 3, titulo: "Don Quijote", autor: "Miguel de Cervantes", anio: 1605, genero: "Clásico", disponible: true },
  { id: 4, titulo: "1984", autor: "George Orwell", anio: 1949, genero: "Distopía", disponible: true },
  { id: 5, titulo: "El hobbit", autor: "J.R.R. Tolkien", anio: 1937, genero: "Fantasía", disponible: true },
  { id: 6, titulo: "Fahrenheit 451", autor: "Ray Bradbury", anio: 1953, genero: "Distopía", disponible: true },
  { id: 7, titulo: "Rayuela", autor: "Julio Cortázar", anio: 1963, genero: "Novela", disponible: true },
  { id: 8, titulo: "La odisea", autor: "Homero", anio: -800, genero: "Épico", disponible: true },
  { id: 9, titulo: "Orgullo y prejuicio", autor: "Jane Austen", anio: 1813, genero: "Romance", disponible: true },
  { id: 10, titulo: "El señor de los anillos", autor: "J.R.R. Tolkien", anio: 1954, genero: "Fantasía", disponible: true }
];

//b)
//creamos un array de usuarios
// Array de usuarios registrados
let usuarios = [
  { id: 1, nombre: "Ana", email: "ana@email.com", librosPrestados: [] },
  { id: 2, nombre: "Carlos", email: "carlos@email.com", librosPrestados: [] },
  { id: 3, nombre: "Sofía", email: "sofia@email.com", librosPrestados: [] },
  { id: 4, nombre: "Juan", email: "juan@email.com", librosPrestados: [] },
  { id: 5, nombre: "María", email: "maria@email.com", librosPrestados: [] }
];

//Ej2
//gestion de libros

// a)funcion para agregar un nuevo libro al array libros
function agregarLibro(id, titulo, autor, anio, genero) {
  libros.push({ //con push agregamos un nuevo objeto al final del array libros 
    id: id,
    titulo: titulo,
    autor: autor,
    anio: anio,
    genero: genero,
    disponible: true
  });
}


//b) funcion para buscar un libro por titulo,autor o género

// Busca libros por título, autor o género en forma lineal
function buscarLibro(criterio, valor) {//criterio puede ser 'titulo', 'autor' o 'genero'
  let resultados = [];//array para almacenar los resultados de la búsqueda

  for (let i = 0; i < libros.length; i++) {//recorremos el array libros
    if (libros[i][criterio] === valor) {//comparamos el valor del criterio con el valor buscado
      resultados.push(libros[i]);//si coincide, agregamos el libro al array resultados
    }
  }

  console.log(resultados);
}

//c)ordenamos los libros 

// Ordena libros por título o año usando bubble sort
function ordenarLibros(criterio) { //criterio puede ser 'titulo' o 'anio'
  for (let i = 0; i < libros.length - 1; i++) {//bucle externo
    for (let j = 0; j < libros.length - 1 - i; j++) {//bucle interno
      if (libros[j][criterio] > libros[j + 1][criterio]) {//comparamos los libros según el criterio
        let aux = libros[j];//intercambiamos los libros si están en el orden incorrecto
        libros[j] = libros[j + 1];//intercambiamos los libros si están en el orden incorrecto
        libros[j + 1] = aux;//intercambiamos los libros si están en el orden incorrecto
      }
    }
  }

  console.log(libros);
}

//d)borramos un libro
// Elimina un libro por id usando .filter()
function borrarLibro(id) {
  libros = libros.filter(libro => libro.id !== id);
}

//Ej: 3-Gestion de usuarios

//a)registramos un nuevo usuario
//usamos.push() para agregar un nuevo usuario al array usuarios
function registrarUsuario(nombre, email) {
  usuarios.push({
    id: usuarios.length + 1,
    nombre: nombre,
    email: email,
    librosPrestados: []
  });
}

//b)mostramos los usuarios
function mostrarTodosLosUsuarios() {
  return usuarios;//devolvemos el array de usuarios
}

//c)buscamos usuario por email
//usamos .find() para encontrar el usuario
function buscarUsuario(email) {
  return usuarios.find(usuario => usuario.email === email);
}

//d)borramos los usuarios por nombre y email
function borrarUsuario(nombre, email) {
  usuarios = usuarios.filter( //con filter creamos un nuevo array sin el usuario que queremos borrar
    usuario => usuario.nombre !== nombre || usuario.email !== email
  );
}


//Ej4: Sistema de préstamos

//a)Prestar un libro
//Marca el libro como no disponible usando  y lo asigna al usuario
//buscamos el libro y el usuario por sus IDs
//si el libro está disponible, lo marcamos como no disponible
//y lo agregamos a la lista de libros prestados del usuario
function prestarLibro(idLibro, idUsuario) {
  let libro = libros.find(l => l.id === idLibro);
  let usuario = usuarios.find(u => u.id === idUsuario);

  if (libro && usuario && libro.disponible) {
    libro.disponible = false;
    usuario.librosPrestados.push(idLibro);
  }
}


//b)Devolver un libro
//Devuelve un libro y lo quita del usuario
//buscamos el libro y el usuario por sus IDs
//marcamos el libro como disponible


function devolverLibro(idLibro, idUsuario){
  let libro = libros.find(l => l.id === idLibro);
  let usuario = usuarios.find(u => u.id === idUsuario);

  if (libro && usuario) {
    libro.disponible = true;
    usuario.librosPrestados = usuario.librosPrestados.filter(id => id !== idLibro);
}
}
//Ej 5: Reportes generales de los libros
//a)Generar un reporte de libros
//muestra el total de libros, cuantos están prestados, cuantos por género y el libro más antiguo y más nuevo
function generarReporteLibros() {
  let total = libros.length;

  let prestados = libros.filter(l => !l.disponible).length;

  let porGenero = libros.reduce((acc, libro) => {
    acc[libro.genero] = (acc[libro.genero] || 0) + 1;
    return acc;
  }, {});

  let anios = libros.map(l => l.anio);
  let masAntiguo = Math.min(...anios);
  let masNuevo = Math.max(...anios);

  console.log({
    total,
    prestados,
    porGenero,
    masAntiguo,
    masNuevo
  });
}

//Ej6: devuelve los titulos con mas de una palabra
//usamos .filter() para filtrar los libros cuyos títulos tienen más de una palabra
//usamos .map() para obtener solo los títulos de los libros filtrados

function librosConPalabrasEnTitulo() {
  let resultado = libros
    .filter(libro => {
      let titulo = libro.titulo.trim();

      return (
        /^[a-zA-Z\s]+$/.test(titulo) && // solo letras y espacios
        titulo.includes(" ")            // más de una palabra
      );
    })
    .map(libro => libro.titulo);

  console.log(resultado);
  return resultado;
}


//Ej 7: Estadísticas
//se calcula usando Math
//obtenemos un array con los años de publicación de los libros
//contamos la frecuencia de cada año
//obtenemos la clave con el valor máximo
//diferencia entre el año más reciente y el más antiguo
//mostramos las estadísticas calculadas

function calcularEstadisticas() {
  let anios = libros.map(l => l.anio);
  let promedio = anios.reduce((a, b) => a + b, 0) / anios.length;

  let frecuencia = {};
  anios.forEach(a => frecuencia[a] = (frecuencia[a] || 0) + 1);

  let masFrecuente = Object.keys(frecuencia).reduce((a, b) =>
    frecuencia[a] > frecuencia[b] ? a : b 
  );

  let diferencia = Math.max(...anios) - Math.min(...anios);

  console.log({
    promedio: Math.round(promedio),
    masFrecuente,
    diferencia
  });
}


//Ej 8: Normalizamos los datos de los libros( titulos, autores y emails de usuarios)
//a) Normaliza los títulos de los libros a mayúsculas y elimina espacios en blanco de los autores
//b) Normaliza los emails de los usuarios a minúsculas

function normalizarDatos() {
  libros.forEach(libro => {
    libro.titulo = libro.titulo.toUpperCase();
    libro.autor = libro.autor.trim();
  });

  usuarios.forEach(usuario => {
    usuario.email = usuario.email.toLowerCase();
  });
}


// Ej 9: Menú básico por consola
//menu principal que permite al usuario elegir entre ver libros, ver usuarios o salir

function menuPrincipal() {
    "1- Ver libros\n2- Ver usuarios\n3- Salir"
  let opcion = prompt("Seleccione una opción:\n1- Ver libros\n2- Ver usuarios\n3- Salir\n");

  switch (opcion) {
    case "1":
      console.log(libros);
      break;
    case "2":
      console.log(usuarios);
      break;
    case "3":
      console.log("Fin del programa");
      break;
    default:
      console.log("Opción incorrecta");
  }
}
