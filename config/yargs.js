const descripcion = {
    alias: 'd',
    demand: true,
    desc: 'Descripcion de la tarea por hacer'
}

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente'
}

const argv = require('yargs')
    .command('crear', 'Crea un nuevo elemento', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado de un elemento', {
        descripcion,
        completado
    })
    .command('borrar', 'Elimina un elemento', {
        descripcion
    })
    .command('listar', 'Lista tareas de acuerdo a su status', {
        completado
    })
    .help()
    .argv;


module.exports = {
    argv
}