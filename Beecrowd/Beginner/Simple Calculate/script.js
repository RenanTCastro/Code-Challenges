var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var [line_1, line_2] = input.split('\n');

let result = line_1.split(" ")[1]*line_1.split(" ")[2] + line_2.split(" ")[1]*line_2.split(" ")[2]
console.log("VALOR A PAGAR: R$",result.toFixed(2))
