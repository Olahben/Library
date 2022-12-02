let myLibrary = []

function Book(title, author, pages, haveRead) {
    this.title = title, 
    this.author = author, 
    this.pages = pages, 
    this.haveRead = haveRead


}

function addBookToLibrary() {
    const newBook = new Book('Heksene', 'Roald Dahl', 200, true)
    const newBook2 = new Book('The richest man in babylon', 'Ola', 315, false)
    const newBook3 = new Book('RIch dad poor dad', 'Robert', 300, false)
    const newBook4 = new Book('Neuroplasticity', 'Andrew', 489, false)
    myLibrary.push(newBook)
}
addBookToLibrary()

function displayLibrary() {
    myLibrary.forEach(book => console.log(book))
}

console.log(displayLibrary())