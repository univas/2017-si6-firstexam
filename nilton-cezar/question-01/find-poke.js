const pokes = require('./pokeDB.json')
const { getPokeId, findPokeById } = require('./poke-module')
const { printName, fancyPrint } = require('./printer-module')

const pokeId = getPokeId()
const pokesFound = pokes.filter(findPokeById(pokeId))

pokesFound.forEach(fancyPrint)

if(pokesFound.length === 0)
    console.log('Poke not found')
