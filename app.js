
const container = document.querySelector('#book-content')

let newBookIndex = 0;
const library = []

class Book {
    constructor(title, author, pages, haveRead) {
        this.title = title, 
        this.author = author, 
        this.pages = pages, 
        this.haveRead = haveRead
    }
    createBookCard(obj) {
        const bookCard = document.createElement('div')
        container.appendChild(bookCard)
        bookCard.classList.add('card')

        const bookCardTitle = document.createElement('div')
        bookCard.appendChild(bookCardTitle)
        bookCardTitle.classList.add('book-title-author')
        bookCardTitle.textContent += `${this.title} by ${this.author}`

        const bookCardPages = document.createElement('div')
        bookCard.appendChild(bookCardPages)
        bookCardPages.classList.add('book-pages')
        bookCardPages.textContent =+ this.pages + ' ' + 'pages'

        const bookCardSettings = document.createElement('div')
        bookCard.appendChild(bookCardSettings)
        bookCardSettings.classList.add('book-settings')
        bookCardSettings.textContent += 'Have you read the book?:'

        const read = document.createElement('input')
        read.type = 'checkbox'
        read.classList.add('book-card-read')
        bookCardSettings.appendChild(read)

        if(formFields[3].checked) { // Check if 'read' form control is checked
            read.defaultChecked = true
        } else {
            read.defaultChecked = false
        }

        const deleteBookCard = document.createElement('button')
        deleteBookCard.classList.add('delete')
        bookCardSettings.appendChild(deleteBookCard)
        deleteBookCard.textContent += 'delete'
        deleteBookCard.index = newBookIndex
        newBookIndex++;

        deleteBookCard.addEventListener('click', () => {
            bookCard.style.display = 'none'
        });

        }
}


const modal = document.getElementById('modal')
const addBook = document.getElementById('add-book')
const submitBook = document.getElementById('submit')

addBook.addEventListener('click', () => {
    modal.style.display = 'block';
    bookForm.reset()
});

submitBook.addEventListener('click', () => {
    modal.style.display = 'none'
});

const bookForm = document.querySelector('form')

const formFields = [document.querySelector('#title'), document.querySelector('#author'), document.querySelector('#pages'), document.querySelector('#read')]


function submitClick(event) {
    event.preventDefault()
    callBookConstructor()
    //console.log(event)
}

bookForm.addEventListener('submit', submitClick)

//let newBookIndex = 0;

function callBookConstructor() {
    const newBook = new Book(formFields[0].value, formFields[1].value, formFields[2].value, formFields[3].value)
    newBook.prototype = Object.create(Book.prototype)
    newBook.createBookCard();
    library.push(newBook);

    
    
}





