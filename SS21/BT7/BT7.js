let a = +prompt("Nhập số a");
let b = +prompt("Nhập số b");
let c = +prompt("Nhập số c");
let max = a;
if(max < b){
    max = b;
}
if(max < c){
    max = c;
}
console.log("Số lớn nhất là " + max);