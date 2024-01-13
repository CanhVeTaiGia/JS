let leapYear = +prompt("Nhập năm");
if (leapYear % 4 == 0){
    if (leapYear % 100 != 0) {
        console.log(leapYear + " là một năm nhuận");
    }else {
        if (leapYear % 400 == 0){
            console.log(leapYear + " là một năm nhuận");
        } else{
            console.log(leapYear + " không phải một năm nhuận");
        }
    }
}else {
    console.log(leapYear + " không phải một năm nhuận");
    }