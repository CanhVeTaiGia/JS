let str = prompt("Nhập 1 chuỗi bất kì");
let t = prompt("Nhập 1 kí tự bất kì");
function find(str, t){
    let count = 0;
    for (let i=0; i<str.length; i++){
        if (str[i] == t) count++;
    }
    return count;
}
if (find(str, t) >0 ) {
    console.log(`Kí tự "${t}" xuất hiện ${find(str, t)}`);
} else {
    console.log(`Kí tự "${t}" không có trong chuỗi`);
}