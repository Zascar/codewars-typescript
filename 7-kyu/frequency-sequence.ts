// Your task is to return an output string that translates an input string s
//by replacing each character in s with a number representing the number of
//times that character occurs in s and separating each number with the sep character(s).

// Example (s, sep --> Output)
//"hello world", "-" --> "1-1-3-3-2-1-1-2-1-3-1"
//"19999999"   , ":" --> "1:7:7:7:7:7:7:7"
//"^^^**$"     , "x" --> "3x3x3x2x2x1"

//P.S BROTHERS I'M NOT GONNA BELIEVE THAT THIS SHIT WORKS, BUT IT WORKS =D


function freq(s: string, sep: string): string{


    const counts: Record<string, number> = {};
    let result: string = "";
    const length: number = sep.length;

    for (const char of s){
        console.log(char);
        if (counts[char] === undefined){
            counts[char] = 1;
        } else {
            counts[char] += 1
        }
    }

    for (const i of s){
        result += counts[i];
        result += sep;
        
    }
    result = result.slice(0, -length);
    return result;
}

console.log(freq("banana", "-x-"));