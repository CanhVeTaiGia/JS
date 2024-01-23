let button = document.getElementsByClassName("button");
if(button){
    for (let i=0;i<button.length;i++){
        console.log(button[i]);
        button[i].onclick = function(){
            alert('Xin chào');
        }
    }
}