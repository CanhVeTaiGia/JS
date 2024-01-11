let a = +prompt("Nhập số a");
let b = +prompt("Nhập số b");
let c = +prompt("Nhập số c");
let temp;
if(a > b){
    temp = a;
    a = b;
    b = temp;
}
if(a > c){
    temp = a;
    a = c;
    c = temp;
}
if(b > c){
    temp = b;
    b = c;
    c = temp;
}
console.log(`Sau khi so sánh: ${a}, ${b}, ${c}`);