let arr = [1, 3, 6, 3, 1, 1, 7, 4, 2, 6, 8, 2, 5, 2, 4, 6, 9];
let newArr = [];
for(let i = 0; i < arr.length; i++){
    if(newArr.includes(arr[i])) {
        continue;
    } else {
        newArr.push(arr[i]);
    }
}
console.log(newArr);
