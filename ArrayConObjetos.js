var articulos = [
    { nombre: "bici",   costo: 300},
    { nombre:"tv", costo: 250},
    { nombre: "laptop", costo: 600},
    { nombre: "celular", costo: 500},
    { nombre: "audifonos", costo: 30},
    { nombre: "teclado", costo: 20},
    { nombre: "libro", costo: 90}
]

// validar si algo es verdad o falso, no modifica el array original
//Filter --> filtra objetos especificos.
var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500
});

//llamarlo desde consola
articulosFiltrados 
// (6) [{…}, {…}, {…}, {…}, {…}, {…}]
/**
 * 0: {nombre: "bici", costo: 300}
    1: {nombre: "tv", costo: 250}
    2: {nombre: "celular", costo: 500}
    3: {nombre: "audifonos", costo: 30}
    4: {nombre: "teclado", costo: 20}
    5: {nombre: "libro", costo: 90}
    length: 6
 */

 // ============= MAP ============
//Generara un nuevo array, pero no modifica  el que ya tengo

var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre
});

nombreArticulos
// (7) ["bici", "tv", "laptop", "celular", "audifonos", "teclado", "libro"]