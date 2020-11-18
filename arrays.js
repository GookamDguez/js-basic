var frutas = ["mango", "pera", "durazno"];
console.log(frutas);

//---------------------
var frutas = ["mango", "pera", "durazno"];
console.log(frutas.length);

//-----------
//seleccionar mango

var frutas = ["mango", "pera", "durazno"];
console.log(frutas[0]);

//--- Agregar
var frutas = ["mango", "pera", "durazno"];
var masfrutas = frutas.push("Uvas");

//----Quitar
var frutas = ["mango", "pera", "durazno"];
var masfrutas = frutas.push("Uvas");
// .pop() elimina el ultimo elemento de mi array
// tambien sirve si no le pones nada de parametros
var ultimo = frutas.pop("Uvas");

// --- Agregarlo al inicio el array
var frutas = ["mango", "pera", "durazno"];
//  Agrega el elemneto a la posicion inicial del array
var nuevalongitud = frutas.unshift("Uvas");

//---- Eliminarlo del inicio
var frutas = ["mango", "pera", "durazno"];
// .Agrega el elemneto a la posicion inicial del array
var nuevalongitud = frutas.unshift("Uvas");
//  Elimina el elemento de la posicion inicial
var borrarfruta = frutas.shift("Uvas");

// ---- Saber el indice
var frutas = ["mango", "pera", "durazno"];
var posicion = frutas.indexOf("mango");
console.log(posicion);