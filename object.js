//sintaxis de un objeto:
var objeto = {};

//--- Example
var miAuto = {
    marca: "Toyota",
    modelo: "Corola",
    annio: 2020
};

//Acceder a ellos en consola
miAuto
//Acceder a un objeto en especifico SINTAXIS: objeto.valor
miAuto.marca // ---> Toyota

// Mas cosas...agregandole una function
var miAuto2 = {
    marca2: "Nissan",
    modelo2: "Algo",
    annio2: 2020,
    detalleDelAuto: function(){
        // this ---> hacemos referencia al objeto padre
        console.log(`Auto ${this.modelo2} ${this.annio2}`);
    }
};
//Mandar a llamar a detalleDelAuto
miAuto2.detalleDelAuto();