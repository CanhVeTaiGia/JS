let arr = [1,2,4,5,4,2,8,5,2,4,9];
let arrChild2 = [];
let arrChild3 = [];
for(let i of arr){
    if(i % 2 === 0){
        arrChild2.push(i);
    }
    else{
        arrChild3.push(i);
    }
}
console.log(`Mảng chẵn là ${arrChild2}`);
console.log(`Mảng lẻ là ${arrChild3}`);