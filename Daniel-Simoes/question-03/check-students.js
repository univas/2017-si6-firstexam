var students = require('./studentsDB.json')
let x = process.argv[2]
var sit

for(var i=0; i<students.length; i++){
    
    var stud = students[i];
    while(x==stud.id){

        var media = 0
        for(var l = 0; l < stud.grades.length; l++) {
            var nota = stud.grades[l];
            media+=nota
        }

        if (media/4 >= 60){
            sit = "Aprovado"
        }

        if(media/4 >= 50 && media/4 < 60){
            sit = "Final"
        }else {
            sit = "Reprovado"
        }

    console.log("Nome: " + stud.name)
    console.log("Média: " + media.toFixed(2)/4)
    console.log("Situação: " + sit)
    
    break;
    }
}