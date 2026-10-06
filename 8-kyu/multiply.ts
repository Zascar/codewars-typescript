function checkIfSquare(number: number): boolean{

let low: number = 0;
let high: number = number;
console.log(low, high);

while (low <= high){
    
    let mid = low + (high - low) / 2;
    mid -= mid % 1;
    console.log(mid);
    if (mid * mid === number){
        return true;
    } else if (mid * mid < number){
        low = mid + 1;
    } else {
        high = mid - 1
    }


}
return false;
}

console.log(checkIfSquare(1));