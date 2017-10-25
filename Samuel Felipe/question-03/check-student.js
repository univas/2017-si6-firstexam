var pokedex = require('./studentsDB.json')
var pokemonID = process.argv[2]


for (var i = 0; i < pokedex.length; i++){

    var pokemon = pokedex[i];

    if (pokemonID==pokemon.id){


        
       var somador = (pokemon.grades[0] + pokemon.grades[1] + pokemon.grades[2] + pokemon.grades[3])
        console.log("Name: " + pokemon.name)
       var media = (somador/4)

        console.log("Media: " + media)

           if (media >= 60){
        console.log("Situação: Aprovado")
        break;
        }

        if (media >= 50 && media < 60){
        console.log("Situação: Final")
        break;
        }

        else {
        console.log("Situação: Reprovado")
         break;
        }
        break;


    }
}


