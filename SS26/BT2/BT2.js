let arr = [];
let search = prompt("Nhập giá trị");
let found = false;
for(let i = 0; i < 100; i++){
    arr[i] = i*2;
}
for(let index in arr){
    if(search == arr[index]){
        console.log(index);
        found = true;
        break;
    }
}
if(!found){
    console.log(`Không tìm thấy ${search}`);
}
