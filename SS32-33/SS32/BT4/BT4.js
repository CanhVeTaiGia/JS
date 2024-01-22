function Product(id, name, price, quantity) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
}
let product1 = new Product(1, "Product A", 1000, 5);
for(let property in product1){
    if(product1.hasOwnProperty(property)){
        console.log(`${property}: ${product1[property]}`);
    }
}