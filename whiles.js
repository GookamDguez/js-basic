var estudiantes = ["Maria", "Sergio", "Rosa", "Dani"];

function saludarEstudiantes(student){
    console.log(`Holo, ${student}`);
}

while(estudiantes.length > 0){
    console.log(estudiantes);
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
}
//shift() saca elementos y por eso no es necesario un contador :)