const students = require('./studentsDB.json')
const { getStudentId, findStudentById } = require('./student-module')
const { printName, fancyPrint } = require('./printer-module')

const StudentId = getStudentId()
const studentsFound = students.filter(findStudentById(StudentId))

studentsFound.forEach(fancyPrint)

if(studentsFound.length === 0)
    console.log('Student not found')
