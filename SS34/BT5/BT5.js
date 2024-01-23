let names = ["Nguyễn Văn A", "Nguyễn Thị B", "Vũ Thị C"];
let ul = document.createElement('ul');
for(let i = 0; i < names.length; i++){
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(names[i]));
    ul.appendChild(li);
}
let nameListDiv = document.getElementById("nameList");
nameListDiv.appendChild(ul);