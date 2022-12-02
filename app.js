let myLibrary = []

function Book(title, author, pages, haveRead) {
    this.title = title, 
    this.author = author, 
    this.pages = pages, 
    this.haveRead = haveRead


}

function addBookToLibrary() {
    const newBook = new Book('Heksene', 'Roald Dahl', 200, true)
    myLibrary.push(newBook)
}
addBookToLibrary()

function displayLibrary() {
    myLibrary.forEach(book => console.log(book))
}

console.log(displayLibrary())