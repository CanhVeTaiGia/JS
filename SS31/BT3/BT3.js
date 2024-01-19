function comfirmEnding(str, substr){
    return str.endsWith(substr);
}
let str = "Hello world"
let substr = prompt("Nhập chuỗi");
console.log(comfirmEnding(str, substr));