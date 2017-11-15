var alunos = require('./studentsDB.json') //Importando Json.
var val = process.argv[2] //Recebendo o valor por parametro.

var status //Variavel a receber a situação do aluno.
var soma = 0 //Variavel para soma da nota.
var media = 0 //Variavel de media do aluno.
var msgm = 0; //Variavel temporaria para retorno de mensagem.


//Repetição para percorrer toda a lista de alunos.
for ( var i = 0; i < alunos.length; i++ ) { 
    var aluno = alunos[i]; //Atribuindo os dados do aluno percorrido atual para a variavel aluno.
    if ( val == aluno.id ) { //Se encontrou o aluno fornecido.

        for ( var ii = 0; ii < aluno.grades.length; ii++ ) { //Repetição para percorrer todas as notas do aluno.
            var nota = aluno.grades[ii]; //Atribuindo a nota a variavel.
            soma+=nota //Somando os valores das notas.
        }

        mediafinal = soma / 4; //Dividindo a soma das notas do aluno.

        if ( mediafinal >= 50 || mediafinal < 60 ) { // Se a Media Final < 60 o Aluno está aprovado.
            status = "Final"
        } else if ( mediafinal/4 >= 60 ) { // Se a Media Final > 60 o Aluno está aprovado.
            status = "Aprovado"
        } else {
            status = "Reprovado" // Se não o aluno está reprovado.
        }

    console.log("Nome: " + aluno.name) //Imprimindo nome do aluno.
    console.log("Média: " + mediafinal.toFixed(2)) //Imprimindo Media Final com 2 casas decimais.
    console.log("Situação: " + status) //Imprimindo o status do aluno.
    var msgm = 1; //Setando o valor da variavel temporária por ter encontrado o aluno.
    
    }
}
//Caso não encontre nenhum aluno, retorne a mensagem.
if (msgm == 0){
    console.log("Aluno não encontrado.");
}
