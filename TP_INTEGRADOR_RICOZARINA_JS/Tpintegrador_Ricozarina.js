//instalamos prompt para recibir datos por consola
const prompt = require('prompt-sync')();

//primero creamos un array de libros con sus respectivas propiedades

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

//creamos un array de usuarios
// Array de usuarios registrados
let usuarios = [
  { id: 1, nombre: "Ana", email: "ana@email.com", librosPrestados: [] },
  { id: 2, nombre: "Carlos", email: "carlos@email.com", librosPrestados: [] },
  { id: 3, nombre: "Sofía", email: "sofia@email.com", librosPrestados: [] },
  { id: 4, nombre: "Juan", email: "juan@email.com", librosPrestados: [] },
  { id: 5, nombre: "María", email: "maria@email.com", librosPrestados: [] }
];

//gestion de libros

// funcion para agregar un nuevo libro al array libros
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


// funcion para buscar un libro por titulo,autor o género

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

//ordenamos los libros 

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

//borramos un libro
// Elimina un libro por id
function borrarLibro(id) {
  libros = libros.filter(libro => libro.id !== id);
}

//Gestion de usuarios

//registramos un nuevo usuario
function registrarUsuario(nombre, email) {
  usuarios.push({
    id: usuarios.length + 1,
    nombre: nombre,
    email: email,
    librosPrestados: []
  });
}

//mostramos los usuarios
function mostrarTodosLosUsuarios() {
  return usuarios;//devolvemos el array de usuarios
}

//buscamos usuario por email

function buscarUsuario(email) {
  return usuarios.find(usuario => usuario.email === email);
}

//borramos los usuarios por nombre y email
function borrarUsuario(nombre, email) {
  usuarios = usuarios.filter( //con filter creamos un nuevo array sin el usuario que queremos borrar
    usuario => usuario.nombre !== nombre || usuario.email !== email
  );
}


//Sistema de préstamos

//Prestar un libro
//Marca el libro como no disponible y lo asigna al usuario

function prestarLibro(idLibro, idUsuario) {
  let libro = libros.find(l => l.id === idLibro);
  let usuario = usuarios.find(u => u.id === idUsuario);

  if (libro && usuario && libro.disponible) {
    libro.disponible = false;
    usuario.librosPrestados.push(idLibro);
  }
}


//Devolver un libro
//Devuelve un libro y lo quita del usuario
function devolverLibro(idLibro, idUsuario) {
  let libro = libros.find(l => l.id === idLibro);
  let usuario = usuarios.find(u => u.id === idUsuario);

  if (libro && usuario) {
    libro.disponible = true;
    usuario.librosPrestados = usuario.librosPrestados.filter(id => id !== idLibro);
  }
}

//Reportes generales de los libros

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

//devuelve los titulos con mas de una palabra

function librosConPalabrasEnTitulo() {
  let resultado = libros
    .filter(libro => /^[A-Za-zÁÉÍÓÚáéíóú ]+$/.test(libro.titulo) && libro.titulo.trim().includes(" "))
    .map(libro => libro.titulo);

  console.log(resultado);
  return resultado;
}

//Estadísticas
//se calcula usando Math

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


//Normalizamos los datos de los libros( titulos, autores y emails de usuarios)

function normalizarDatos() {
  libros.forEach(libro => {
    libro.titulo = libro.titulo.toUpperCase();
    libro.autor = libro.autor.trim();
  });

  usuarios.forEach(usuario => {
    usuario.email = usuario.email.toLowerCase();
  });
}


// Menú básico por consola

function menuPrincipal() {
  let opcion = prompt(
    "1- Ver libros\n2- Ver usuarios\n3- Salir"
  );

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
