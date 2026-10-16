function humanReadable(seconds:number):string {
// TODO
    let sec: number = seconds;
    let min: number = 0;
    let hour: number = 0;
    let result: string = "";

    while(sec >= 60){
        if(sec >= 60){
            min += 1;
            sec -= 60;
            if (min >= 60){
                hour += 1;
                min -= 60;
            }
        }
    }
    return result = String(hour).padStart(2, "0") + ":" + String(min).padStart(2, "0") + ":" + String(sec).padStart(2, "0");
}

console.log(humanReadable(3600));