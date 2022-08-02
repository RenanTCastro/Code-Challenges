// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". 
// Your function receives one side of the DNA you need to return the other complementary side.
// DNA strand is never empty or there is no DNA at al.

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

function DNAStrand(dna){
    let result = [];
    dna.split("").forEach((e)=>{
        if(e === "A"){result.push("T")}else
        if(e === "T"){result.push("A")}else
        if(e === "C"){result.push("G")}else
        if(e === "G"){result.push("C")}
    })
    return result.join("");
}