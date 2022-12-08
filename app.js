
const container = document.querySelector('#book-content')


class Book {
    constructor(title, author, pages, haveRead) {
        this.title = title, 
        this.author = author, 
        this.pages = pages, 
        this.haveRead = haveRead
    }
    createBookCard(obj) {
        const div = document.createElement('div')
        container.appendChild(div)
        div.classList.add('card')
        div.textContent += this.title
        }
}


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
    callBookConstructor()
    console.log(event)
}

function callBookConstructor() {
    const newBook = new Book(formFields[0].value, formFields[1].value, formFields[2].value, formFields[3].value)
     newBook.createBookCard()
}

