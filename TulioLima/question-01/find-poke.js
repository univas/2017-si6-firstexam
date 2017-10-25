const pokemons =  require('./pokeDB.json')

filter(process.argv[2]);

function filter(id){
         var pokemon = pokemons[id-1];
         console.log(pokemon.name);
         console.log(pokemon.type);   
}

