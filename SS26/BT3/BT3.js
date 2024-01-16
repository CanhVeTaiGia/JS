let arr = [];
let find = +prompt("Nhập số nguyên dương bất kì");
let count = 0;
for(let i = 0; i < 20;i++){
    arr[i] = Math.floor(Math.random() * 10) + 1;
}
for(let index in arr){
    if(find === arr[index]){
        count += 1;
    }
}
if(count === 0){
    console.log(`Trong mảng không tồn tại giá trị ${find}`);
}else{
    console.log(count);
}