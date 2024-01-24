const sId = document.getElementById("sId");
const sName = document.getElementById("sName");
const age = document.getElementById("age");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const button = document.getElementById("button");
button.addEventListener("click", check);
function check() {
    let id1 = document.getElementById("id1");
    let id2 = document.getElementById("id2");
    let id3 = document.getElementById("id3");
    let id4 = document.getElementById("id4");
    let id5 = document.getElementById("id5");
    if(sId.value.length !== 6){
        id1.textContent = "ID phải gồm 6 kí tự";
    }
    else{
        id1.textContent = "ID hợp lệ";
    }
    if(sName.value === ""){
        id2.textContent = "Name không được để trống"
    }
    else{
        id2.textContent = "Name hợp lệ";
    }
    if(age.value < 18){
        id3.textContent = "Age phải lớn hơn hoặc bằng 18";
    }
    else{
        id3.textContent = "Age hợp lệ";
    }
    if(phone.value.length !== 11){
        id4.textContent = "Phone phải có định dạng là số điện thoại ở Việt Nam";
    }
    else{
        id4.textContent = "Phone hợp lệ";
    }
    if(email !== "@" && email !== "."){
        id5.textContent = "Email phải có định dạng email";
    }
    else{
        id5.textContent = "Email hợp lệ"
    }
}