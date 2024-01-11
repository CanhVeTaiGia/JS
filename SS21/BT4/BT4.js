var jnumber = +prompt("Kiểm tra số âm, số dương");
if(jnumber===0){
    console.log("Is 0");
} else{
    if(jnumber > 0){
        console.log((jnumber) + " Is Positive");
    }else{
        console.log((jnumber) + " Is Negative");
    }
}