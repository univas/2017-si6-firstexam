const pokes = require('./pokeDB.json')

let pokeId = process.argv[2]

function printPoke (poke) {
    console.log("Name: " + poke.name)
    console.log("Type: "+ poke.type)
}

function findPokeById (poke) {
    return function calback(poke, index) {
        return pokeId == poke.id
    }
}

const poke = pokes.find(findPokeById(pokeId))

poke ? printPoke(poke) : console.log('poke not found')


