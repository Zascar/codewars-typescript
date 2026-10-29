const pigIt = (a : string) : string =>  {
    let arr: string[] = a.split(" ");
    let temp: string = ""
    for(let i = 0; i < arr.length; i++){
    if (arr[i] === "") { // Skip empty strings
    continue;
    }
    temp = arr[i][0];
    arr[i] = arr[i].slice(1);
    arr[i] += temp;
    if(arr[i][0].toLowerCase() >= "a" && arr[i][0].toLowerCase() <="z"){ // Check if the first character is a Latin letter
        arr[i] += "ay"
    }
    }
    return arr.join(" ");
}