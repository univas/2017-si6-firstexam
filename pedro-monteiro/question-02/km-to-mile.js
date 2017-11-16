const km = parseInt(process.argv[2])

function converter (){
    return (km*0.62137119).toFixed(2)
}

console.log (converter())