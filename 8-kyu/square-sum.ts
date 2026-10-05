function sumSquare(numbers: number[]): number {
    let temp: number = 0;
    for (const number of numbers){
        temp += number * number;
        console.log(temp);
    }
    return temp;
}
console.log(sumSquare([1, 2, 3, 4, 5]));