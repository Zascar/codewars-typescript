let boolToString = (x: boolean): String =>{
    if (x){
        return "true";
    } else {
        return "false";
    }
}

console.log(typeof(boolToString(true)));