function printName(student) {
    console.log(student.name)
}

function fancyPrint(student) {
    const media = ((student.grades[0]+student.grades[1]+student.grades[2]+student.grades[3])/4)
    console.log("Nome: " + student.name)
    console.log("Media: " + media)
    if(media >= 60 )
    console.log("Situação: Aprovado" )
    else if (media >= 50 && media < 60){
        console.log("Situação: Final" )
    }
    else
     console.log("Situação: Reprovado" )
}

module.exports = {
    printName,
    fancyPrint
}