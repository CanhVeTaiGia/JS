function Information(id, name, phone, address){
    this.id = id;
    this.name = name;
    this.phone = phone;
    this.address = address;
}
let person = new Information(+prompt("Nhập ID"), prompt("Nhập tên"), +prompt("Nhập số điện thoại"), prompt("Nhập địa chỉ"));
console.log(`ID: ${person.id}
Tên: ${person.name}
Số điện thoại: ${person.phone}
Địa chỉ: ${person.address}`);