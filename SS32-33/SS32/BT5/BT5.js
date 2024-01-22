class book{
    constructor(name, author){
        this.name = name;
        this.author = author;    
    }
}
let books= [
    book1 = new book("The Alchemist","Paulo Coelho"),
    book2 = new book("Roshidere", "SunSunSun")
];
let searchAuthor = prompt("Nhập tên tác giả từ bàn phím: ");
let foundBook = books.find( book => book.author == searchAuthor);
if (foundBook) {
    console.log(foundBook);
} else {
    console.log("Không tìm thấy sách");
}