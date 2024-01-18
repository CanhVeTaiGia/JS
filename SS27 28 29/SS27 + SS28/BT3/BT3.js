let n = +prompt("Nhập giới hạn phần tử");
let arr = [];
arr.length = n;
for(let i = 0; i < arr.length; i++){
    arr[i] = +prompt(`arr[${i}]`);
}
arr = arr.filter(num => num % 2 !== 0);
console.log(arr);