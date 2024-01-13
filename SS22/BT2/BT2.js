let a = +prompt("Nhập a");
let b = +prompt("Nhập b");
let c = +prompt("Nhập c");
if(a+b>c && b+c>a && a+c>b){
    console.log("a,b,c là 3 cạnh của tam giác")
} else{
    console.log("a,b,c không tạo nên 3 cạnh của tam giác");
}