function Book(title, author, publishedYear) {
    this.title = title;
    this.author = author;
    this.publishedYear = publishedYear;
    this.display = function() {
      console.log("Title: " + this.title);
      console.log("Author: " + this.author);
      console.log("Published Year: " + this.publishedYear);
    }
  }
  function Library() {
    this.books = [];
    this.addBook = function(book) {
      this.books.push(book);
    }
    this.displayBooks = function() {
      for (let i = 0; i < this.books.length; i++) {
        console.log("Book " + (i+1) + ":");
        this.books[i].display();
      }
    }
  }
  let book1 = new Book("Book One", "Author One", 2000);
  let book2 = new Book("Book Two", "Author Two", 2005);
  let book3 = new Book("Book Three", "Author Three", 2010);
  let library = new Library();
  library.addBook(book1);
  library.addBook(book2);
  library.addBook(book3);
  library.displayBooks();