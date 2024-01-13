let a = +prompt("Nhập số thứ nhất");
let b = +prompt("Nhập số thứ 2");
let calculation = prompt("Nhập phép tính (+, -, *, /)");
switch (calculation){
    case '+':
        console.log(a+b);
        break;
    case '-':
        console.log(a-b);
        break;
    case '*':
        console.log(a*b);
        break;
    case '/':
        if(b === 0){
            console.log(a/b);
        }else{
            console.log('Không thể chia cho 0');
        }
        break;
    default:
        console.log("Không hợp lệ");
        break;
}