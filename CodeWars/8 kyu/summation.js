// Write a program that finds the summation of every number from 1 to num. 
// The number will always be a positive integer greater than 0.

// For example:

// summation(2) -> 3
// 1 + 2

var summation = function (num) {
    let res = 0;
    while(num>0){res+=num,num--}
    return res
}
  