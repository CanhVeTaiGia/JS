let arr = [5, 6 ,2 ,3 ,7 ,5 ,1 ,3 ,6 ,4 , 4];
const num = +prompt("Enter a number:");
let start = 0, sum = 0;
for(let i = 0; i < arr.length; i++) {
    sum += arr[i];
    while (sum > num && start < i) {
        sum -= arr[start];
        start++;
    }
    if (sum === num) {
        console.log(`Array slice: ${arr.slice(start, i + 1)}`);
        break;
    }
}
if (start === arr.length) {
    console.log("Không có mảng con thỏa mãn");
}