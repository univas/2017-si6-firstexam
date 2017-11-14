const students = require('./studentsDB.json')
var soma = 0
const studentId = process.argv[2] 
var situacao = ' '
function findStudentById(studentId){ 
    console.log("Student ID: " + studentId) 
    return function callback(student){ 
        
        return studentId == student.id
    }
}

const studentFound = students.find(findStudentById(studentId))

if(studentFound){
    for(var i =0; i<4; i++){
        soma = soma + studentFound.grades[i] 
    }
        media = soma/4

        if(media >= 60){
            situacao = 'Aprovado'
        }else if((media >=50) && (media < 60)){
            situacao = 'Final'
        }else{
            situacao = 'Reprovado'
        }

        console.log("Nome "+studentFound.name)
        console.log("Média: "+media)
        console.log("Situação: " + situacao)
}
else{
    console.log('student not found')
}