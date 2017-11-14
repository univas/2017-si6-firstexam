const thisIsPrivate = "Encapsulated variable"

function findAlunoByName(AlunoName) {
    return function callback(aluno) {
        if(!alunoName) return false
        return aluno.name.toLowerCase().includes(alunoName.toLowerCase())
    }
}

function getAlunoName() {
    return process.argv[2] || 'nobody'
}

//public
module.exports = {
    findUsuarioByName,
    getUsuarioName
}