const pokemons = require('./pokeDB.json')
const pokemonID = process.argv[2]
const pokemonFound = findPokemon()

printPokemon()

function findPokemon(){
   for (var i = 0; i < pokemons.length; i++){
        if (pokemonID == pokemons[i].id)
            return pokemons[i]
   }

   return false
}

function printPokemon(){
    if (pokemonFound){
        console.log("Name: " + pokemonFound.name)
        console.log("Type: " + pokemonFound.type)
    } 
    else 
        console.log("Pokemon not found.")
}

