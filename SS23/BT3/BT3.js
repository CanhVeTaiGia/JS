for(let i = 1; i <= 100; i++){
    if(i%3===0){
        if(i%5===0){
            console.log( i+ " là FizzBuzz");
        }else{
            console.log( i+ " là Fizz");
        }
    }else if(i%5===0){
        console.log( i+" là Buzz");
    }else{
    }
}