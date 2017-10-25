var number = process.argv[2]

var conta = (number/1.6);
var arredondado = parseFloat(conta.toFixed(2));

console.log(arredondado);