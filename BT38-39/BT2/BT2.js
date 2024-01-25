let inputBox = document.querySelector(".input-box"),
search = document.querySelector(".search"),
closeItem = document.querySelector(".close-icon");
search.addEventListener("click", open);
function open(){
    inputBox.classList.add("open");
}