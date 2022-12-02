let myLibrary = [new Book('Heksene', 'Roald Dahl', 200, true ), new Book('The richest man in babylon', 'Ola', 315, false), new Book('RIch dad poor dad', 'Robert', 300, false), new Book('Neuroplasticity', 'Andrew', 489, false)]

function Book(title, author, pages, haveRead) {
    this.title = title, 
    this.author = author, 
    this.pages = pages, 
    this.haveRead = haveRead


}

function addBookToLibrary() {
    myLibrary.push(book)
}
addBookToLibrary()

function displayLibrary() {
    myLibrary.forEach(book => console.log(book))
}

displayLibrary()