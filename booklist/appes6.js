//book constructor
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

//UI constructor
class UI {
    addBookToList(book) {
        const list = document.getElementById('book-list');
        //create an tr element
        const row = document.createElement('tr');

        //Insert cols
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete" >x</a></td>
    `;
        list.appendChild(row);


    }

    showAlert(message, className) {
        //Create div
        const div = document.createElement('div');
        //add Class
        div.className = `alert ${className}`;
        //add text
        div.appendChild(document.createTextNode(message));
        //Get Parent
        const container = document.querySelector('.container');
        //Get form
        const form = document.querySelector('#book-form');
        //Insert alert
        container.insertBefore(div, form);
        //TimeOut after 3 sec
        setTimeout(function () {
            document.querySelector('.alert').remove();
        }, 3000);
    }

    deleteBook(target) {
        if (target.className === 'delete') {
            target.parentElement.parentElement.remove();
        }
    }

    clearFields() {
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }
}


//Local Storage class
class Store {
    static getBooks() {
        let books;
        if (localStorage.getItem('books') === null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }

        return books;
    }

    static displayBooks() {
        const books = Store.getBooks();

        books.forEach(function (book) {
            const ui = new UI();

            //Add book to ui
            ui.addBookToList(book);
        });
    }


    static addBook(book) {
        const books = Store.getBooks();
        books.push(book)

        localStorage.setItem('books', JSON.stringify(books));
    }

    static removeBook(isbn) {
        const books = Store.getBooks();
        books.forEach(function (book, index){
            if (book.isbn === isbn) {
                books.splice(index,1);
            }
        });

        localStorage.setItem('books', JSON.stringify(books));
    }
}
//DOM Load Event
document.addEventListener('DOMContentLoaded', Store.displayBooks());


//Event Listeners for add
document.getElementById('book-form').addEventListener('submit', function (e) {
    const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value;

    //Instanciate book
    const book = new Book(title, author, isbn);

    //instaniate UI
    const ui = new UI();

    console.log(ui);
    //validate
    if (title === '' || author === '' || isbn === '') {
        ui.showAlert('Please Fill in All fields', 'error');
    } else {
        //Add book to liste
        ui.addBookToList(book);

        //add book to local storage
        Store.addBook(book);

        //show success
        ui.showAlert('Book Added!', 'success');
        //clear fieald
        ui.clearFields();
    }

    e.preventDefault();
});
// Event Listener for delete
document.getElementById('book-list').addEventListener('click', function (e) {
    //Instanciate UI()
    const ui = new UI();


    //Delete book
    ui.deleteBook(e.target);

    Store.removeBook(e.target.parentElement.previousElementSibling.textContent)

    //show message
    ui.showAlert('Book Removed!', 'success');

    e.preventDefault();
});