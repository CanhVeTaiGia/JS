let correctNumber = Math.floor(Math.random() * 10) + 1;
let loop = true;
console.log(correctNumber);
do{
    let answer = +prompt("Nhập số từ 1-10");
    if(answer < correctNumber){
        console.log("Too small");
    }else if(answer > correctNumber){
        console.log("Too big");
    }else{
        console.log("Bingo");
        break;
    }
}while(loop === true)