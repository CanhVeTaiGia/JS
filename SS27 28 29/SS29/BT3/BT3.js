let str = "Ez thinking";
console.log(strlen(str));
function strlen(string) {
    let length = 0;
    for (let i in string){
        length++;
    }
    return length;
}