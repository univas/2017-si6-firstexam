var usuario = require('./usuario.json')
var x = process.argv[2]

for(var i=0; i< usuario.lenght; i++){
    var usuario = usuario[i];
    if(x==usuario.code){
        console.log("Name:"+ usuario.name)
        console.log("Type:"+ usuario.type)
        break;
    }
}