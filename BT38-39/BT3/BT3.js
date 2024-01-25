let image = document.images[0];
let bigImage = document.createElement("img");
bigImage.onload = function(){
    image.src = this.src;
    image.className = "";
}
setTimeout(function() {
    bigImage.src = "https://images6.alphacoders.com/122/1224755.jpg";
}, 1000);