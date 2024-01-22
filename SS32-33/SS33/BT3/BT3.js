let phoneBook = {
    contract1: {
        name: "Alice",
        phone: "123-456-789",
        email: "alice@example.com",
        displayInfo(){
            for(let key in phoneBook){
                console.log(`Name: ${phoneBook[key].name},
Phone: ${phoneBook[key].phone},
Email: ${phoneBook[key].email}
-------------------------`);
            }
        },
    },
    create(){
        this.contract1.id=Object.keys(this.contract1).length
        return this.contract1;
    }
};
phoneBook.contract1.displayInfo();