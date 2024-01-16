let arr = [1,5,-10,-6,5,6,7,11,15,6,5];
let newArr = [];
for(let i = 0; i < arr.length; i++){
    if(arr[i] < 0){
        newArr.unshift(arr[i])
    }
    if(arr[i] > 0){
        newArr.push(arr[i]);
    }
}
console.log(newArr);
