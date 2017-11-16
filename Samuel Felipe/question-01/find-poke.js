var pokedex = require('./pokeDB.json')
var pokemonID = process.argv[2]

for (var i = 0; i < pokedex.length; i++){

    var pokemon = pokedex[i];

    if (pokemonID==pokemon.id){

        console.log("Name: " + pokemon.name)
        console.log("Type: " + pokemon.type)
        break;
    }
}