const thisIsPrivate = "Encapsulated variable"

function findPokeById(pokeId) {
    return function callback(poke) {
        if(!pokeId) return false
        if(pokeId === poke.id) return poke.name.toLowerCase()
    }
}

function getPokeId() {
    return process.argv[2] || 'nobody'
}

module.exports = {
    findPokeById,
    getPokeId
}