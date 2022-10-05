const Tarea=require('./tarea');

class Tareas{
    _listado={};

    get listadoArra(){

        const listado=[];

        Object.keys(this._listado).forEach(key=>listado.push(this._listado[key]));
        return listado;
    }

    constructor(){
        this._listado={};
    }

    crearTareasFromArray(tareas=[]){
        //console.log(tareas);
        tareas.forEach(tarea=>{
            this._listado[tarea.id]=tarea;
        })

    }

    crearTarea(desc=''){
        const tarea=new Tarea(desc);
        this._listado[tarea.id]=tarea;
   
    }

    borrarTarea(id=""){
        if(this._listado[id]){
            delete this._listado[id];
        }
    }

    listadoCompleto(){
        //console.log(this.listado);
        this.listadoArra.forEach((tarea,index)=>{
            
            (tarea.completadoEn) ? console.log(`${index+1}.  ${tarea.desc} :: ${"Completada".bgGreen}`)
            :console.log(`${index+1}.  ${tarea.desc} :: ${"Pendiente".bgRed} `);
        })

    }

    listarPendientesCompletadas(completada=true){
        let cont=0;
        this.listadoArra.forEach(tarea=>{
            if(completada){
                if(tarea.completadoEn) {
                    console.log(` ${++cont} ${tarea.desc} :: ${tarea.completadoEn.bgGreen}`)
                }
            }
            else{
                if(!tarea.completadoEn) {
                    console.log(` ${++cont} ${tarea.desc} :: ${"Pendiente".bgRed} `);
                }
            }
        })

    }

    toggleCompletadas(ids=[]){
        ids.forEach(id=>{
            if(!this._listado[id].completadoEn){
                this._listado[id].completadoEn=new Date().toISOString();
            }
        })
        this.listadoArra.forEach(tarea=>{
            if(!ids.includes(tarea.id)){
                tarea.completadoEn=null;
            }
        })
 
    }
}

module.exports=Tareas;