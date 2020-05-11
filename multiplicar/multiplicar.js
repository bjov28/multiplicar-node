//requireds
const colors = require('colors');
const fs = require('fs');

const listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {


        if (!Number(base)) {
            reject(`El valor introducido '${base}' no es un numero`);
            return;
        }if (!Number(limite)) {
            reject(`El valor introducido '${limite}' no es un numero`);
            return;
        }


        console.log('==========================='.green);
        console.log(`====Tabla de ${ base }=====`);
        console.log('==========================='.green);

        let data = '';

        for (let i = 1; i <= limite; i++) {
            let result = base * i;
            data += `${base} * ${i} = ${result} \n`
        }

        resolve(data);
        
    })
}

const crearArchivo = (base) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido '${base}' no es un numero`);
            return;
        }

        let data = '';

        for (let i = 1; i <= 10; i++) {
            let result = base * i;
            data += `${base} * ${i} = ${result} \n`
        }


        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}.txt`)
        });
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}



