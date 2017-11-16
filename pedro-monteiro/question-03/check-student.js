const students = require('./studentsDB.json')
const studentID = process.argv[2]
const studentFound = findStudent()

printStudent()

function findStudent(){
   for (var i = 0; i < students.length; i++){
        if (studentID == students[i].id)
            return students[i]
   }

   return false
}

function calculateMedia(student){
    let  studentMedia = 0
    for (var i = 0; i < student.grades.length; i++){
        studentMedia = studentMedia + parseInt(student.grades[i])
    }

    return studentMedia = (studentMedia / student.grades.length)
}

function studentSituation(studentMedia){
    if (studentMedia >= 60) return "Aprovado"
    else 
        if (studentMedia < 50) return "Reprovado"
        else 
            return "Final"
}

function printStudent(){
    if (studentFound){
        console.log("Nome: " + studentFound.name)
        console.log("Média: " + calculateMedia(studentFound))
        console.log("Situação: " + studentSituation(calculateMedia(studentFound)))
    } 
    else 
        console.log("Estudante não encontrado.")
}


