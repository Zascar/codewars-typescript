function highAndLow(numbers: string) {
  // throw new NotImplementedException() ?
  // No, wait, this is TypeScript.
    const arr = numbers.split(' ');
    let arrNumbers: number[] = arr.map(Number);

    let higher: number = arrNumbers[0];
    let lower: number = arrNumbers[0];

    let result: string = "";
    
  for (let i: number = 1; i < arrNumbers.length; i++){
    if (arrNumbers[i] > higher) higher = arrNumbers[i];
    if (arrNumbers[i] < lower) lower = arrNumbers[i];
  }
  


  return result = higher.toString() +" " + lower.toString();

}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))