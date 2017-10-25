const students = require('./studentsDB.json')

let studentId = process.argv[2]
let media = 0
let situacao

function findStudentById (student) {
    return function calback(student, index) {
        return studentId == student.id
    }
}

function calcMedia(grades) {
    var notas = 0

    for (var i = 0; i < grades.length; i++) {
        notas += grades[i]
    }

    return Math.floor((notas/grades.length))
}

const student = students.find(findStudentById(studentId))

if(student) {
    media = calcMedia(student.grades)
    
    situacao = media < 50 ? 'Reprovado' : (media < 60 ? 'Final' : 'Aprovado')

    console.log('Nome: ' + student.name + '\nMédia: ' + media + '\nSituação: ' + situacao)

}
