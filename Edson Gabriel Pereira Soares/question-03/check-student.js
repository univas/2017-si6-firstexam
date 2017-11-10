var students = require('./studentsDB.json')
var x = process.argv[2]
var situacao

for (var i = 0; i < students.length; i++) {
    var student = students[i];
    if (x==student.id) {
        console.log("parou aki!")
        var media = 0
        for (var z = 0; z < student.grades.length; z++) {
            var aux = student.grades[z];
            media+=aux
        }
        if (media/4 >= 60) {
            situacao = "Aprovado"
        }else if(media/4 >= 50 && media/4 < 60){
            situacao = "Final"
        }else{
            situacao = "Reprovado"
        }
    console.log("Nome: " + student.name)
    console.log("Média: " + media.toFixed(2)/4)
    console.log("Situação: " + situacao)
    }
}
