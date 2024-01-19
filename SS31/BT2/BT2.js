function largestOfArrs(...arr){
    let maxes = [];
    for(let i = 0; i < arr.length; i++){
        let max = Math.max(...arr[i]);
        maxes.push(max);
    }
    return maxes;
}
let arr1 = [1,3,6,3,5,9,10];
let arr2 = [3,6,8,2,1,11];
let arr3 = [-10,-8,-7,-1,-6];
console.log(largestOfArrs(arr1,arr2,arr3));