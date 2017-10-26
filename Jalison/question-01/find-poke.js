const pokeJson = require('./pokeDB.json')

function getPokemonByiD(value){


    for (var i = 0; i < pokeJson.length; i++) {
        if(value == pokeJson[i].id)
            {
                console.log("Name: "+pokeJson[i].name);
                console.log("Type: "+pokeJson[i].type);
            }
  
    }
} 
    var id = process.argv[2];

    getPokemonByiD(id); 