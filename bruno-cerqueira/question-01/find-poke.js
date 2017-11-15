var list = require('./pokeDB.json') //Importando Json.
let pkm = process.argv[2] //Recebendo o valor por parametro.
var msgm = 0; //Variavel temporaria para retorno de mensagem.

//Condição de repetição para percorrer toda a lista até o seu tamanho total.
    for(var i = 0; i < list.length; i++){        
        pkms = list[i] //Atribuindo pokemon do vetor na variavel.
        //Se encontrou com o id fornecido.
        if (pkm == pkms.id) {
            //Imprimindo Nome e Tipo do Pokemon.
            console.log("Name: " + pkms.name)
            console.log("Type: " + pkms.type) 
            msgm = 1; //Setando o valor da variavel temporária por ter encontrado o pokemon.
        } 
    }
    //Caso não encontre nenhum pokemon, retorne a mensagem.
    if (msgm == 0){
        console.log("Pokemon not found.")
    }

// Pokemon > Digimon :P