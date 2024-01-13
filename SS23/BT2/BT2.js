let number = +prompt("Nhập 1 số");
let factorial = 1;
for(let i = number; i > 0; i--){
    factorial *= i;
}
console.log(factorial);