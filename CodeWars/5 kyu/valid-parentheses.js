// Write a function that takes a string of parentheses, and determines if the order of the 
// parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true

function validParentheses(parens) {
    let p1=0,p2=0,verify=0;
    parens.split("").forEach(e=>{
      if(e == ")"){p1++}else
      if(e == "("){p2++}
      if(p1>p2){verify=1}
    })
    return (p1==p2 && !verify)?true:false;
}