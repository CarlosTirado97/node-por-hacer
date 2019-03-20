const { argv } = require('./config/yargs');
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors/safe');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'actualizar':
        actualizado = porHacer.actualizar(argv.descripcion, argv.completado)
        console.log(actualizado);
        break;
    case 'listar':
        let listado = porHacer.getListado(argv.completado);
        console.log(listado);
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.completado);
        console.log(borrado);
        break;
    default:
        console.log('El comando no existe');
        break;
}