function sumZero(arr){
    let sumZeros = [];
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if((i + j) === 0){
                sumZeros.push([arr[i], arr[j]]);
            }
        }
    }
    return sumZeros;
}
let arr = [-4,-3,-2,-1,0,1,2,3,4,5];
console.log(sumZero(arr));
