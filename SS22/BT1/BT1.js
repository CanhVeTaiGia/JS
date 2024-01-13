let a = +prompt("Nhập a");
let b = +prompt("Nhập b");
if(a>b){
    if (a % b === 0) {
        console.log("a chia hết cho b");
    } else {
        console.log("a không chia hết cho b");
    }
}else{
    if (b % a === 0) {
        console.log("b chia hết cho a");
    } else {
        console.log("b không chia hết cho a");
    }
}