const pokemons = require('./pokeDB.json')

const pokemonNum = process.argv[2] //DIGITA Numero

function findPokemonNumber(studentId){ //função pura
    console.log("Student ID: " + studentId) //executa 1x
    return function callback(student,index){ 
        //console.log('received Ids ' + student.id) //executa nx
        return studentId == student.id
    }
}

const student = students.find(findStudentById(studentId)) //find(encontra um item de cada vez)
let output = student ? student.name : 'Student not found'
console.log(output)