let arr = [3,6,5];
let found = false;
let sm = 1;
for(let i = 0; i < arr.length; i++){
    if(arr[i] > 0 && arr[i] < sm){
        sm = arr[i];
    }
    if(arr[i] === sm){
        found = true;
    }
}
if(!found){
    console.log(sm);
}
else{
    sm++;
    console.log(sm);
}