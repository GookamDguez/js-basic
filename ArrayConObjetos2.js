var articulos = [
    { nombre: "bici",   costo: 300},
    { nombre:"tv", costo: 250},
    { nombre: "laptop", costo: 600},
    { nombre: "celular", costo: 500},
    { nombre: "audifonos", costo: 30},
    { nombre: "teclado", costo: 20},
    { nombre: "libro", costo: 90}
]

//=============== FIND =============

//find --> no modifica, solo valida si existe, si existe lo regresa.

var encuentraArticulo = articulos.find(function(aticulo){
    return aticulo.nombre === "laptop"
});

encuentraArticulo
// {nombre: "laptop", costo: 600}

//================ FOR EACH ==========
//hace el filtrado en el array

articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});
//En consola, me saca una listita.

//================= SOME ===========
// some() ---> regresa true/false, para los articulos que cumplan la validacion

var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 200;
});
articulosBaratos // true