let arr = ["hello", "hi", "thx", "ligmas"];
function gls(arr){
    let ls = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(ls.length < arr[i].length) {
            ls = arr[i];
        }
    }
    return ls;
}
console.log(gls(arr));