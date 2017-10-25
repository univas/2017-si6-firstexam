function printName(poke) {
    console.log(poke.name)
}

function fancyPrint(poke) {
    console.log("Name: " + poke.name)
    console.log("Type: " + poke.type)
}

module.exports = {
    printName,
    fancyPrint
}