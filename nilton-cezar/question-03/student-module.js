const thisIsPrivate = "Encapsulated variable"

function findStudentById(studentId) {
    return function callback(student) {
        if(!studentId) return false
        if(studentId === student.id) return student.name.toLowerCase()
    }
}

function getStudentId() {
    return process.argv[2] || 'nobody'
}

module.exports = {
    findStudentById,
    getStudentId
}