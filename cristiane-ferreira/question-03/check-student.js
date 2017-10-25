const students = require('./studentsDB.json')

let studentId = process.argv[2]

function findStudentById(studentId){
    return function(student){
        return studentId == student.id
        
    }
}

const student = students.find(findStudentById(studentId))
let ID = student ? student.name : 'Pokemon not found'
var Media = 0;

Media = parseInt(parseInt(student.grades[0])+parseInt(student.grades[1])+parseInt(student.grades[2])+parseInt(student.grades[3]))/4

//var i = 0;
//students.forEach(function(findStudentById) {
//    Media += parseInt(student.grades[0]);
//    i = i+1
//}, this)

console.log('Name: '+ ID)
console.log('Media: '+ Media)


if (Media < 50) console.log('Situação: Reprovado');
if (Media >= 60) console.log('Situação: Aprovado');
if (Media >= 50 && Media <60) console.log('Situação: Final');

