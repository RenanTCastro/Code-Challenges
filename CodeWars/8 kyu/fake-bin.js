
// Given a string of digits, you should replace any digit below 5 with '0' and 
// any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

function fakeBin(x){
    let res = []
    x.split("").forEach((x,i)=>{
      x>=5?res[i]=1:res[i]=0
    });
    return res.join('')
  }
  