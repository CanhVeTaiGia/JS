function isEven(n){
    if(n % 2 === 0){
        console.log(`${n} là số chẵn`);
    }else{
        console.log(`${n} là số lẻ`);
    }
}
let a = Math.floor(Math.random() * 10) + 1;
let b = Math.floor(Math.random() * 10) + 1;
let c = Math.floor(Math.random() * 10) + 1;
isEven(a);
isEven(b);
isEven(c);