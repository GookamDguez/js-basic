//Declarativas

function miFuncion(){
    return 3;
}
    //Mandandola a llamar
    miFuncion();

// -----------------------------

//Expresión --> Expresiva --> anónimas

var miFuncion = function(a, b){
    return a + b;
}
    //Mandandola a llamar
    miFuncion();

//EXAMPLE
function saludarMe(estudent){
    console.log(`Holis ${estudent}`);
}

    //llamandola
    saludarMe("Gaby"); // Holis Gaby