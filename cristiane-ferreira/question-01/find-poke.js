const pokemons = require('./pokeDB.json')

let pokemonId = process.argv[2]

function findPokemonById(pokemonId){
    return function(pokemon){
        return pokemonId == pokemon.id
        
    }
}

const pokemon = pokemons.find(findPokemonById(pokemonId))
let ID = pokemon ? pokemon.name : 'Pokemon not found'
let Type = pokemon ? pokemon.type : 'Pokemon not found'

console.log('Name: '+ ID)
console.log('Type: '+ Type)