let person = {
    name: "John Doe",
    age: 18,
    address: "123 Main St"
};
console.log(person);
person.dateOfBirth = new Date("2005-01-24");
console.log(person);
delete person.age;
console.log(person);