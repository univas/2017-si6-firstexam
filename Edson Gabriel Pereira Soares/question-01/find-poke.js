var pokes = require('./pokeDB.json') 
let x = process.argv[2]

for(var i = 0; i < pokes.length; i++){
    poke = pokes[i]
    if (x == poke.id) {
        console.log("Name: " + poke.name)
        console.log("Type: " + poke.type)
    }
}