const argv = require('./config/yargs').argv;
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const colors = require('colors');

console.log(argv);
let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(archivo => console.log(`Tabla ${archivo}`))
            .catch(e => console.log(e));
        break;
    case 'crear':
        crearArchivo(argv.base)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');

}


