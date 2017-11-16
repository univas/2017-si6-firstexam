
const km = parseInt(process.argv[2])
const miles = parseFloat(calculateMiles(km).toFixed(2))

function calculateMiles() {
    return km * 0.62137119;
}

console.log(miles)