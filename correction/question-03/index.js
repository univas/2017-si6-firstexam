const studentsDB = require('../../question-03/studentsDB')

function getStudentId() {
    return process.argv[2] || null
}

function searchStudentBy(id) {
    return function lookFor(student) {
        return student.id == id
    }
}

function getStatus(grade) {
    let status = 'Approved'
    if (grade < 50) {
        status = 'Not approved'
    }
    else if(grade < 60 ) {
        status = 'Final'
    }
    return status
}

const id = getStudentId()
const student = studentsDB.find(searchStudentBy(id))
const grade = student.grades.reduce((a, b) => a + b) / 4
// console.log(student.name)

console.log('Name: ' + student.name)
console.log('Grade: ' + grade.toFixed(2))
console.log('Status: ' + getStatus(grade))