let num = +prompt("Nhập vào một số bất kỳ: ");
num = parseInt(num);
let count = 0;
for(let i = 2; i <= num / 2; i++) {
    if(num % i === 0) {
        count++;
        break;
    }
}
if(count === 0 && num !== 1) {
    console.log(num + " là số hoàn hảo");
} else {
    console.log(num + " không phải là số hoàn hảo");
}