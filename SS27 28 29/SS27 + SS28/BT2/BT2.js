let a = +prompt("Nhập a");
let b = +prompt("Nhập b");
let arr = [];
let temp;
if(a < b){
    temp = b - a;
    for(let i = 1; i < (b - a) + 1; i++){
        arr[i] = temp;
        temp ++;
        console.log(arr[i]);
    }
}
if(b < a){
    temp = a - b;
    for(let i = 1; i < (a - b) + 1; i++){
        arr[i] = temp;
        temp ++;
        console.log(arr[i]);
    }
}

