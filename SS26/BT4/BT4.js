let a = +prompt("Nhập a");
let b = +prompt("Nhập b");
let arr= [];
for(let i = 1; i <= a || i <= b; i++){
    if(i % a === 0 || i % b === 0){
        arr.push(i);
    }
}
console.log("Các số chia hết cho a hoặc b trong khoảng từ 1 đến a hoặc b là: ");
console.log(arr)