let n = +prompt("Nhập n");
function printOdd(n){
    let arr= [];
    let sum = 0;
    for (let i=1;i<=n;i++){
            if(i % 2 !== 0){
            sum += i;
            arr.push(i);
        }
    }
    if(sum % 2 === 0){
        sum -= i;
        arr.pop(i);
    }
    return arr;
}
console.log(printOdd(n));