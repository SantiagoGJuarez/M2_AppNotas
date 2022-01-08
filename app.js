let moduloTareas = require('./funcionesDeTareas')
let process = require('process')

switch (process.argv[2]) {
    case 'listar':
        let tareas = moduloTareas.leerJSON()
        console.log('LISTA DE TAREAS:');
        console.log('****************');
        tareas.forEach(element => {
            console.log('Título: ' + element.titulo + ' - Estado: ' + element.estado);
        })
        break
    case 'agregar':
        let titulo = process.argv[3];
        let estado = process.argv[4];
        if(titulo == undefined || estado == undefined) {
            console.log('Error - Especifique un titulo y estado por favor');
        } else {
            moduloTareas.escribirJSON(titulo, estado);
            console.log('Titulo = ' + titulo + ' y Estado = ' + estado + ', se agregaron satisfactoriamente a la lista');
        }
        break
    case 'deshacer':
        moduloTareas.deshacer();
        console.log('La última tarea se ha eliminado');
        break
    case 'filtrar':
        let filtrar = process.argv[3];
        let listaFiltrada = moduloTareas.filtrarPorEstado(filtrar);
        listaFiltrada.forEach(element => {
            console.log(element.titulo);
        })
        break
    case undefined:
        console.log('Atención - Tienes que pasar una acción'); 
        break
    default:
        console.log('No entiendo que quieres hacer');               
}

