let a = +prompt("Nhập a");
let b = +prompt("Nhập b");
let c = +prompt("Nhập c");
let delta = b**2 - 4*a*c;
let x;
if(a !== 0){
    if (delta === 0){
        let x = -b/2*a;
        console.log("Phương trình có nghiệm ké là " + x);
    }else if(delta < 0){
        console.log("Phương trình vô nghiệm");
    }else{
        let x1 = (-b+Math.sqrt(delta)) / (2 * a);
        let x2 = (b+Math.sqrt(delta)) / (2 * a);
        console.log("Phương trình có nghiệm " + x1 + " và " + x2);
    }
}else{
    if(b !== 0){
        let x = -c/b;
        console.log("Phương trình có nghiệm " + x);
    }else{
        if(c === 0){
            console.log("Phương trình có vô số nghiệm");
        }else{
            console.log("Phương trình vô nghiệm");
        }
    }
}