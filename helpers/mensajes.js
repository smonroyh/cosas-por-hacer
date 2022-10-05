const { resolve } = require('path');
const { stdin } = require('process');

require('colors');

const mostrarMenu= async()=>{
    console.clear();

    return new Promise(resolve=>{
        console.log('============================'.green);
        console.log(' Seleccione una opción '.green);
        console.log('============================\n'.green);

        console.log(`1. Crear una tarea`);
        console.log(`2. Listar tareas`);
        console.log(`3. Listar tareas completadas`);
        console.log(`4. Listar tareas pendientes`);
        console.log(`5. Completar tareas`);
        console.log(`6. Borrar tarea`);
        console.log(`0. Salir \n`);

        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout,
        });

        readline.question('Seleccione una opción : ', (opt)=>{        
            readline.close();
            resolve(opt);
        })

    });

    
}

const pausa=()=>{
    return new Promise(resolve=>{
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout,
        });
    
        readline.question('Seleccione ENTER para continuar : ', (opt)=>{
            readline.close();
            resolve();
        })
    });
}

module.exports ={
    mostrarMenu,
    pausa
}