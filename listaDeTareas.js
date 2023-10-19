const readline = require('readline-sync');
const fs = require('fs');

const tarea = [];

function mostrarTarea(){
    console.log("\nLista de Tareas");
    tarea.forEach((tarea, index)=>{
        console.log(`${index + 1}. [${tarea.status}] ${tarea.indicador} - ${tarea.descripcion}`);
    });
}

function crearTarea(){
    const indicador = readline.question("Indicador de la tarea: ");
    const descripcion = readline.question("Descripcion de la tarea: ");
    const opcionEstado = ['Completado','No Completado'];
    const indiceEstado = readline.keyInSelect(opcionEstado, "Estado de la tarea: ");
    const estado = opcionEstado[indiceEstado];

    tarea.push({indicador,descripcion,estado});
    guardarTarea();
}

function borrarTarea(){
    mostrarTarea();
    const indiceTarea = readline.questionInt("Ingrese el numero de la tarea que desea eliminar: ") - 1;

    if (indiceTarea >=0 && indiceTarea < tarea.length){
        tarea.splice(indiceTarea, 1);
        guardarTarea();
        console.log("Tarea eliminada exitosamente.");
    }else{
        console.log("Numero de tarea no valido.");
    }
}

function completarTarea(){
    mostrarTarea();
    const indiceTarea = readline.questionInt("Ingrese el numero de la tarea que desea marcar como completada: ") - 1;

    if (indiceTarea >= 0 && indiceTarea < tarea.length){
        tarea[indiceTarea].status = "Completada";
        guardarTarea();
        console.log("Tarea marcada como completada.");
    }else{
        console.log("Numero de tarea no valido");
    }
}


function guardarTarea(){
    fs.writeFileSync("listado.js", JSON.stringify(tarea,null,2));

}

while(true){
    console.log('\nSeleccione una opción:');
    console.log('1. Agregar tarea');
    console.log('2. Eliminar tarea');
    console.log('3. Marcar tarea como completada');
    console.log('4. Mostrar tareas');
    console.log('5. Salir');
    const choice = readline.questionInt('Ingrese: ');

    switch (choice) {
        case 1:
            crearTarea();
            break;
        case 2:
            borrarTarea();
            break;
        case 3:
            completarTarea();
            break;
        case 4:
            mostrarTarea();
            break;
        case 5:
            process.exit();
        default:
            console.log("Opcion no valida. Ingrese otra por favor!!")

    }


}