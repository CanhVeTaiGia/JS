let weight = +prompt("Cân nặng là: (kg)");
let height = +prompt("Chiều cao là: (m)");
let bmi = weight/(height*height);
if(bmi < 18.5){
    console.log("Thấp (gầy)");
}
else if(18.5 <= bmi && bmi <= 24.9){
    console.log("Bình thường");
}
else if(bmi >= 25){
    console.log("Thừa cân")
    if(25 <= bmi && bmi <= 29.9){
        console.log("Tiền béo phì")
    }
    else if(30 <= bmi && bmi <=34.9){
        console.log("Béo phì độ I");
    }
    else if(35 <= bmi && bmi <= 39.9){
        console.log("Béo phì độ II");
    }
    else{
        console.log("Béo phì độ III");
    }
}
else{
    console.log("Không hợp lệ");
}