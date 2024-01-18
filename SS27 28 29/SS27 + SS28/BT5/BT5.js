let arr = [1,1,2,2,6,4,3,7,8,3,6,3,9];
let counts = {};
let only = null;
for(let i=0;i<arr.length;i++){
    if (counts[arr[i]]) {
        counts[arr[i]]++;
    } else {
        counts[arr[i]] = 1;
    }
}
for(let key in counts){
    if(counts[key] === 1){
        only = key;
        break;
    }
}
console.log(`Phần tử độc nhất đầu tiên là: ${only}`);