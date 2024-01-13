let month = +prompt("Nhập tháng");
let year = +prompt("Nhập năm");
let isleapyear;
if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
    isleapyear = true;
} else {
    isleapyear = false;
}

if(year <= 0){
    console.log("Năm không hợp lệ");
}else{
    if (month < 1 || month > 12) {
        console.log("Tháng không hợp lệ");
    } else {
        if(month === 2){
            if(isleapyear){
                console.log("Tháng " +month+ " năm " +year+ " có 29 ngày");
            }else{
                console.log("Tháng " +month+ " năm " +year+ " có 28 ngày");
            }
        }else if(month === 2 || month === 4 || month === 6 || month === 9 || month === 11){
            console.log("Tháng " +month+ " năm " +year+ " có 30 ngày");
        }else{
            console.log("Tháng " +month+ " năm " +year+ " có 31 ngày");
        }
    }
}
