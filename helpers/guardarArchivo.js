const fs=require('fs');

const archivo='./db/data.json'

const guardarInfo=(data)=>{
    fs.writeFileSync(archivo,data);
}

const leerDb=()=>{
    if(!fs.existsSync(archivo)){
        return null;
    }
    //Obtengo la info que esta en el archivo en string
    const info=fs.readFileSync(archivo,{encoding: 'utf8'});
    //Lo convierto a formato JSON
    const data=JSON.parse(info);
    
    // console.log(data);
    return data;
}

module.exports={
    guardarInfo,
    leerDb
};