require('colors');

const {inquirerMenu,
        pausa,
        leerInput,
        listadoTareasBorrar,
        confirmar,
        listadoTareasCompletar
        }=require('./helpers/inquirer');

const Tarea=require('./models/tarea');
const Tareas=require('./models/tareas');

const {guardarInfo,leerDb} = require('./helpers/guardarArchivo');


//const {mostrarMenu,pausa}=require('./helpers/mensajes');


const main= async()=>{
    let opt='';
    const tareas=new Tareas(); 

    const tareasDB=leerDb();

    if(tareasDB){  //cargar tareas
        tareas.crearTareasFromArray(tareasDB);
        
    }
    // await pausa();

    do {
        //opt= await mostrarMenu();

        opt=await inquirerMenu();
        // console.log(opt);
        switch (opt) {
            case '1':
                const desc=await leerInput("Descripción: ");	
                tareas.crearTarea(desc);
            break;
            case '2':
                // console.log(tareas._listado);
                // console.log(tareas.listadoArra);
                tareas.listadoCompleto();
                
            break;
            case '3':
                tareas.listarPendientesCompletadas(true);
                
            break;
            case '4':
                tareas.listarPendientesCompletadas(false);
                
            break;
            case '5':
                const ids=await listadoTareasCompletar(tareas.listadoArra);
                //console.log(ids);
                tareas.toggleCompletadas(ids);
                
                //console.log(tareas.toggleCompletadas(ids));
                
            break;
            case '6':
                const id =await listadoTareasBorrar(tareas.listadoArra);
                //console.log({id});
                if(id!=0){
                    const resp=await confirmar("¿Seguro desea borrar la tarea?");
                    if(resp){
                        tareas.borrarTarea(id);
                        console.log('TAREA BORRADA CORRECTAMENTE');
                    }
                }
            break;
            
        }

        guardarInfo(JSON.stringify(tareas.listadoArra));

        if(opt!='0')await pausa();
    } while (opt!='0');
    //pausa();
}

main()

