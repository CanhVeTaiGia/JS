function findSquareNumber(n){
    let flag = 0;
    let i = 0;
    while(i <= n){
        if(Math.pow(i, 2) == n){
            flag = 1;
            break;
        }
        i++;
    }
    return flag;
}

let n = +prompt("Nhập 1 số tự nhiên");
let check = findSquareNumber(n);
if(check === 1){
    console.log( n + " là số chính phương");
} else{
    console.log(n + " không phải là số chính phương");
}