const thisIsPrivate = "Encapsulated variable"

function findUsuarioByName(usuarioName) {
    return function callback(usuario) {
        if(!usuarioName) return false
        return usuario.name.toLowerCase().includes(usuarioName.toLowerCase())
    }
}

function getUsuarioName() {
    return process.argv[2] || 'nobody'
}

//public
module.exports = {
    findUsuarioByName,
    getUsuarioName
}