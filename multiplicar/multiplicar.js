const fs = require('fs');
const colors = require('colors');


let crearArchivo = async (base, limite) => {

    let data = '';

    if (!Number(base)) {
        throw new Error(`El valor introducido ${ base } no es un numero`);
    }

    if (!Number(limite)) {
        throw new Error(`El valor introducido ${ limite } no es un numero`);
    }

    for (let i = 1; i <= limite; i++) {
        data += `${ base } * ${ i } = ${ base * i}\n`;
    }

    fs.writeFile(`tablas/tabla-${ base }-al-${ limite }.txt`, data, (err) => {
        if (err) throw err;

    });

    return `tablas/tabla-${ base }-al-${ limite }.txt`;

}


let listarTabla = async (base, limite) => {
    if (!Number(base)) {
        throw new Error(`El valor introducido ${ base } no es un numero`);
    }

    if (!Number(limite)) {
        throw new Error(`El valor introducido ${ limite } no es un numero`);
    }

    console.log('============'.green);
    console.log(`Tabla de ${ base }`.green);
    console.log('============'.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${ base } * ${ i } = ${ base * i}\n`);
    }

}

module.exports = {
    crearArchivo,
    listarTabla
};