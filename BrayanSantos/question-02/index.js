function toConverterkm(km) {
    const milhas = 0.62137119;
    return km * milhas;
}

let result = toConverterkm(process.argv[2]);
let results = parseFloat(result.toFixed(02));
console.log(results);