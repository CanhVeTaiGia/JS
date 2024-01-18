arr = [1,6,3,5,9,6,2,5,6,2,3,6,5,4,7];
function isPrime(n){
    let flag = true;
    if(n <= 2){
        return false;
    }
    else{
        for(let i = 2; i < n-1; i++){
            if(n % i === 0){
                return false;
            }
        }
    }
    return true;
}
for(let i in arr){
    if (isPrime(arr[i])) {
        console.log(`${arr[i]} is a prime number`);
    }
}