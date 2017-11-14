const pokemons = require('./pokeDB.json')

function search(id) {
    for (var pokemon of pokemons) {
        if (pokemon.id == id) {
            console.log("name: " + pokemon.name);
            console.log("type: " + pokemon.type);
            return true;
        }
    }
    return false;
}

let encontrado = search(process.argv[2]);
if (!encontrado) {
    console.log("the pokemon " + process.argv[2] + "not found");
}