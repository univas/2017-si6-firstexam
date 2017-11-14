const pokemons = require('./pokeDB.json')

const pokemonNum = process.argv[2] //DIGITA Numero

function findPokemonNumber(pokemonNum){ 
    console.log("Pokemon Number: " + pokemonNum) 
    return function callback(pokemon){ 
        
        return pokemonNum == pokemon.id
    }
}

const pokemon = pokemons.find(findPokemonNumber(pokemonNum))

if(pokemon){
    console.log(pokemon.name)
    console.log(pokemon.type)
}
else{
    console.log('Pokemon not found')
}