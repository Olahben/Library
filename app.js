let myLibrary = [new Book('Heksene', 'Roald Dahl', 200, true ), new Book('The richest man in babylon', 'Ola', 315, false), new Book('RIch dad poor dad', 'Robert', 300, false), new Book('Neuroplasticity', 'Andrew', 489, false)]
const container = document.querySelector('#book-content')

function createBookCard() {
    const div = document.createElement('div')
    container.appendChild(div)
    div.classList.add('card')
}

function Book(title, author, pages, haveRead) {
    this.title = title, 
    this.author = author, 
    this.pages = pages, 
    this.haveRead = haveRead


}

function addBookToLibrary() {
    myLibrary.push()
}
addBookToLibrary()

function displayLibrary() {
    myLibrary.forEach(book => createBookCard())
}

displayLibrary()

const modal = document.getElementById('modal')
const addBook = document.getElementById('add-book')
const submitBook = document.getElementById('submit')

addBook.addEventListener('click', () => {
    modal.style.display = 'block';
});

submitBook.addEventListener('click', () => {
    modal.style.display = 'none'
});

const bookForm = document.querySelector('form')

const formFields = [document.querySelector('#title'), document.querySelector('#author'), document.querySelector('#pages'), document.querySelector('#read')]


bookForm.addEventListener('submit', submitClick)

function submitClick(event) {
    event.preventDefault()
    callConstructor()
    console.log(event)
}

function callConstructor() {
     new Book(formFields[0].value, formFields[1].value, formFields[2].value, formFields[3].value)
}

