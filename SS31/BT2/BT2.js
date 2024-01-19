function largestOfArrs(...arr){
    let maxes = [];
    for(let i = 0; i < arr.length; i++){
        let max = Math.max(...arr[i]);
        maxes.push(max);
    }
    return maxes;
}
console.log(largestOfArrs([1, 2, 3, 4], [-1, -2, -3], [5, 1, 2, 9]));
console.log(largestOfArrs([1, 2, 3, 4], [5, 1, 2, 9]));
console.log(largestOfArrs());