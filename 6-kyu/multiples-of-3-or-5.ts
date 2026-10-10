function solution(num: number){
    let sum: number = 0;
    if (num <= 0){
        return 0;
    }
    for (let i: number = 0; i < num; i++){
        if (i % 3 === 0 || i % 5 === 0){
            sum += i
        }
    }
    return sum;
}

console.log(solution(10) === 23);
console.log(solution(16) === 60);
console.log(solution(3) === 0);
console.log(solution(5) === 3);
console.log(solution(6) === 8);
console.log(solution(0) === 0);
console.log(solution(-10) === 0);
console.log(solution(1) === 0);
console.log(solution(20) === 78);
console.log(solution(100) === 2318);