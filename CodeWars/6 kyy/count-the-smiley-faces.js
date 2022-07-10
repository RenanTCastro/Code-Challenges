// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

// Rules for a smiling face:

// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D
// No additional characters are allowed except for those mentioned.

// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]

// Example
// countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
// countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
// countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;

function countSmileys(arr) {
    let count = 0;
    arr.forEach(face => {
      let arrFace = face.split('');
      console.log(arrFace)
                  
      if(arrFace[0] == ":" || arrFace[0] == ";"){                                    
        if(arrFace.length == 3){
          if(arrFace[1] == "-" || arrFace[1] == "~"){
            if(arrFace[2] == ")" || arrFace[2] == "D"){
              count++;
            } 
          }
        }else if(arrFace[1] == ")" || arrFace[1] == "D"){
              count++;
        } 
    }})
    return count
}