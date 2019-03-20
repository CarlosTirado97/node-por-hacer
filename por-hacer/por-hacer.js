const fs = require('fs');


let listadoPorHacer = [];


const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('./DB/data.json', data, (error) => {
        if (error) {
            throw new Error('No se pudo guardar');
        }
        console.log('Guardado con exito');
    })
}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../DB/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }

}
const getListado = (completado) => {
    cargarDB();
    if (completado == true || completado == 'true' || completado == false || completado == 'false') {
        let listado = listadoPorHacer.filter(tarea => String(tarea.completado) == String(completado));
        return listado;
    } else {
        return 'Solo se acepta status true o false';
    }
}

const actualizar = (descripcion, completado) => {

    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return listadoPorHacer[index];
    } else {
        return false;
    }


}

const crear = (descripcion) => {
    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    }
    listadoPorHacer.push(porHacer);
    guardarDB();

    return porHacer;
}

const borrar = (descripcion) => {
    cargarDB();
    let borrado = listadoPorHacer.find(tarea => tarea.descripcion === descripcion);
    if (!borrado) {
        return `No existe la tarea con la descripcion: ${descripcion}`;
    } else {
        listadoPorHacer = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);
        guardarDB();
        return borrado;
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}