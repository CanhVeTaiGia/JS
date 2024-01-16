let arr = [1, 'b' , 5, "adv"];
let newArr = [];
for(let i = 0; i < arr.length; i++){
    newArr.unshift(arr[i]);
}
console.log(newArr);