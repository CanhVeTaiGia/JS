// Câu lệnh if/else và switch/case là các cấu trúc điều khiển phổ biến trong lập trình, được sử dụng để chạy các đoạn mã dựa trên một điều kiện nhất định.
// 1. if/else: Cấu trúc này kiểm tra điều kiện và chạy mã tương ứng dựa trên kết quả.
let age = 18;
if (age >= 18) {
    console.log("Bạn đủ tuổi");
} else {
    console.log("Bạn không đủ tuổi");
}
// 2. switch/case: Cấu trúc này được sử dụng khi muốn so sánh một biến với nhiều giá trị khác nhau.
let age2 = 18;
switch (age2) {
    case 18:
        console.log("Bạn đã 18 tuổi");
        break;
    case 21:
        console.log("Bạn đã 21 tuổi");
        break;
    default:
        console.log("Bạn không thuộc 18 và 21 tuổi");
}

// Tóm lại, if/else được sử dụng khi có 2 hoặc nhiều điều kiện để kiểm tra, trong khi switch/case được sử dụng khi muốn kiểm tra một biến có giá trị thuộc về nhóm các giá trị nào đó.