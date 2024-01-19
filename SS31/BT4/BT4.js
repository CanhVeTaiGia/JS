function chunk(str,n){
    return str.slice(0,n);
}
let str = "abcd acbaac";
let n = 4;
console.log(`${chunk(str,n)} ...`);

