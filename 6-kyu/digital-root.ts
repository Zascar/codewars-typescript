const digitalRoot = (n:number):number => {

    let number: number = n;
    let sum: number = 0;

    function calc(number: number, sum: number): number{
        while(number > 0){
            sum += number % 10;
            number = Math.trunc(number / 10);
        }
        return sum;
    }


    sum = calc(number, sum);
    while(sum > 9){
        sum = calc(sum, 0);
    }
    return sum;
}