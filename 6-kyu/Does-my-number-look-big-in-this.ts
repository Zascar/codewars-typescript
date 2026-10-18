function narcissistic(value: number): boolean {
    let number: number = value;
    let new_number: number[] = [];

    while (number > 0){
        new_number.push(number % 10);
        number = Math.trunc(number / 10);
    }

    let narcissistic: number = 0;
    let power: number = 0;
    power = new_number.length;
    for(let i in new_number){
        narcissistic += new_number[i] ** power;
    }

  return (narcissistic === value);
}