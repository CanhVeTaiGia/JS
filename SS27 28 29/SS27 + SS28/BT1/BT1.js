let arr = [1,7,3,5,8,2,5,2,7,3,4,5,6,2];
let min = arr[0];
let max = arr[0];
for(let i = 1; i < arr.length; i++){
    if (arr[i] < min){
        min = arr[i];
    }
    if (arr[i] > max){
        max = arr[i];
    }
}
console.log(`Max là ${max}, Min là ${min}`);