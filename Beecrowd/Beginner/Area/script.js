var input = require('fs').readFileSync('/dev/stdin', 'utf8');
let [a, b, c] = input.split(" ");
let pi = 3.14159;

console.log("TRIANGULO:",((a*c)/2).toFixed(3)," ");
console.log("CIRCULO:",(pi*(c*c)).toFixed(3)," ");
console.log("TRAPEZIO:",(((parseFloat(a)+parseFloat(b))/2)*c).toFixed(3)," ");
console.log("QUADRADO:",(b*b).toFixed(3)," ");
console.log("RETANGULO:",(a*b).toFixed(3));

