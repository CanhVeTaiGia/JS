let arr = ["a", 2, "c", 5];
found = false;
for(let item of arr){
    if(Number.isInteger(item)){
        console.log(item);
        found = true;
    }
}
if(!found){
    console.log("Trong mảng không tồn tại số nguyên");
}