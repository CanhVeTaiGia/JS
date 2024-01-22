class Student{
    constructor(){
        this.id = null;
        this.name = null;
    }
}
let n = prompt("Nhập số lượng sinh viên");
let students = [];
for(let i = 0; i < n; i++){
    let student = new Student();
    student.id = i+1;
    student.name = prompt(`Hãy nhập tên Sinh Viên thứ ${i+1}:`);
    students.push(student);
}
for(let i = 0; i < students.length; i++){
    console.log(`ID: ${students[i].id}
Tên: ${students[i].name}`);
}
