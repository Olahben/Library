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

let formData = new formData(document.querySelector('form'))

for (let ele of formData) {
    let name = ele[0];
    let value = ele[1]

    console.log(name, value);
}

