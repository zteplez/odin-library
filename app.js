const library = [];

function Book(name, pages, author, isRead){
    this.name = name;
    this.pages = pages;
    this.author = author;
    this.isRead = isRead;
    this.printInfo = function(){
        console.log(`Book information -> Name: ${name} pages: ${pages}, author: ${author}`);
    }
}

// Example book
let book1 = new Book("Hobbit", 324, "Tolkien", false);

book1.printInfo();