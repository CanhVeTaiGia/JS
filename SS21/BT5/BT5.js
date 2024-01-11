var month = +prompt("Nhập tháng");
if(month === 4 || month === 6 || month ===9 || month === 11){
    console.log("Tháng " + month +" có 30 ngày");
}
if(month === 1 || month === 3 || month ===5 || month === 7 || month === 8 || month === 10 || month === 12){
    console.log("Tháng " + month +" có 31 ngày");
} else if(month === 2){
    console.log("Tháng có 28 hoặc 29 ngày");
} else{
    console.log("Không hợp lệ");
}