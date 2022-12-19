
const container = document.querySelector('#book-content')

let newBookIndex = 0;
const library = []

//const readCheckbox = document.querySelector('.book-card-read')

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
        Book.prototype.setReadStatus.call(bookCard, bookCard)

        const readCheckbox = document.querySelector('.book-card-read')
        /*readCheckbox.addEventListener('click', () => {
            Book.prototype.updateReadStatus.call(bookCard, bookCard, readCheckbox);
        });*/
        Book.prototype.updateReadStatus = readCheckbox.addEventListener('click', () => {
            if(readCheckbox.checked) {
                bookCard.haveRead = true
            } else {
                bookCard.haveRead = false
            }
            console.log(bookCard.haveRead)
        });
        }
}


Book.prototype.setReadStatus = (bookCard) => {
    if(formFields[3].checked) {
        bookCard.haveRead = true;
    } else {
        bookCard.haveRead = false;

    }
    console.log(bookCard.haveRead);
}



/*Book.prototype.updateReadStatus = (bookCard, checkbox) => {
    if(checkbox.checked) {
        bookCard.haveRead = true;
    } else {
        bookCard.haveRead = true;
    }
    console.log(bookCard.haveRead);
}*/


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


function submitBookForm(event) {
    event.preventDefault()
    callBookConstructor()
}

bookForm.addEventListener('submit', submitBookForm)


function callBookConstructor() {
    const newBook = new Book(formFields[0].value, formFields[1].value, formFields[2].value, formFields[3].value)
    newBook.createBookCard();
    library.push(newBook);

    
    
}



