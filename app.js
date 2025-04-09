const library = [];

function Book(name, pages, author, isRead){
    this.id = crypto.randomUUID();
    this.name = name;
    this.pages = pages;
    this.author = author;
    this.isRead = isRead;
    this.printInfo = function(){
        console.log(`Book information -> Id: ${this.id} Name: ${this.name} pages: ${this.pages}, author: ${this.author}`);
    }
}

function addBookLibrary(name, pages, author, isRead){
    let newBook = new Book(name, pages, author, isRead);
    library.push(newBook);
    console.log("Add new book.");
}