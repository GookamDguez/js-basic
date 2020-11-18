//Objetos de forma mas automatica
//funciones constructoras
//Objeto:
//Guardar un valor en memoria con la referencia del objeto

var miAuto = {
    marca: "Toyota",
    modelo: "Corola",
    annio: 2020
};

function auto(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

//Crendo un nuevo objeto
var autoNuevo = new auto("Tesla", "Model 3", "2020" );
//llamandolo en consola
autoNuevo

//Crendo un nuevo objeto x2
var autoNuevo2 = new auto("Tesla", "Model X", "2018" );
//Crendo un nuevo objeto x3
var autoNuevo3 = new auto("Toyota", "Corola", "2020" );

//RETO:
/**
 * Hacer un loop para generar nuevas instancias, pedir datos desde el teclado con promp
 */