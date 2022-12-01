let myLibrary = []

function createBook(title, author, pages, haveRead) {
    this.title = title, 
    this.author = author, 
    this.pages = pages, 
    this.haveRead = haveRead


}

function addBookToLibrary() {
    const newBook = new createBook('Heksene', 'Roald Dahl', 200, true)
    myLibrary.push(newBook)
}
addBookToLibrary()

