function rgb(r: number, g: number, b: number): string{
    let result: string = "";
    let max: number = 255;
    let min: number = 0;
    r = Math.min(max, r);
    r = Math.max(min, r);
    g = Math.min(max, g);
    g = Math.max(min, g);
    b = Math.min(max, b);
    b = Math.max(min, b);
    result += r.toString(16).padStart(2, "0").toUpperCase();
    result += g.toString(16).padStart(2, "0").toUpperCase();
    result += b.toString(16).padStart(2, "0").toUpperCase();
    return result
}