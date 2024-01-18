let arr = new Array(10);
for (let i = 0; i < arr.length; i++) {
    arr[i] = Math.floor(Math.random() * 10);
}
console.log("Mảng gốc:");
console.log(arr);
arr.sort(() => Math.random() - 0.5);
console.log("Mảng mới:");
console.log(arr);