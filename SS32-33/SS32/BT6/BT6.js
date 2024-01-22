const products = [
    { id: 1, name: "Iphone 12", price: 200000000},
    { id: 2, name: "Iphone 11", price: 100000000},
    { id: 3, name: "Samsung note 10", price: 500000000},
];
function sortByPrice(products) {
    return products.sort((a, b) => a.price - b.price);
}
const sortedProducts = sortByPrice(products);
console.log(sortedProducts);