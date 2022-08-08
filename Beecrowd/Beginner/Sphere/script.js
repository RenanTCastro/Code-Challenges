var r = require('fs').readFileSync('/dev/stdin', 'utf8');
let pi = 3.14159;

console.log("VOLUME =",((4.0/3) * pi * Math.pow(parseInt(r),3)).toFixed(3))
