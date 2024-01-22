let phoneBook = {
    contract1: {
        name: "Alice",
        phone: "123-456-789",
        email: "alice@example.com",
    },
    contract2: {
        name: "Bob",
        phone: "987-654-321",
        email: "bob@example.com",
    },
}
for(let key in phoneBook){
    console.log(`Name: ${phoneBook[key].name},
Phone: ${phoneBook[key].phone},
Email: ${phoneBook[key].email}
-------------------------`);
}
