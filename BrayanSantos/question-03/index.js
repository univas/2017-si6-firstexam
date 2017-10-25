const students = require('./studentsDB.json')

function studentMedia(matricula) {
    let media = 0;
    let result;
    for (var student of students) {
        if (student.id == matricula) {
            console.log(student.name);
            for (var value of student.grades) {
                media = media + value;
            }
            media = media / 4; 
            if(media < 50) {
                result = "Reprovado"
            } else if(media < 60) {
                result = "Final"
            } else {
                result = "aprovado"
            }
            console.log("Sua media é: " + media);
            console.log("Resultado: " + result);
            return true;
        }
    }
    return false;
}

let encontrado = studentMedia(process.argv[2]);

if (!encontrado) {
    console.log("Aluno " + process.argv[2] + " not found");
}