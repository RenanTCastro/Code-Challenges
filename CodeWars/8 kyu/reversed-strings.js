// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str){
    let res = "";
    for(let i=str.length-1;i>=0;i--){
      res = res + str.substr(i,1);
    }
    return res;
}