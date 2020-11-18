var estudiantes = ["Maria", "Sergio", "Rosa", "Dani"];

function saludarEstudiantes( estudiante){
    console.log(`Helou, ${estudiante}`);
}

for(var i = 0; i<estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i]);
}

//--------- FOR OF --- otra forma
// esto seria "index" - y esto el array
for(var estudiante of estudiantes){
    saludarEstudiantes(estudiante);
}

//inicializa runa variable en singular de nuestro array que esa en  plural.