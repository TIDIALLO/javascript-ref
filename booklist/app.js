//book constructor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

//UI constructor
function UI() { }

//delete book()
UI.prototype.deleteBook = function (target) {
    if (target.className === 'delete') {
        target.parentElement.parentElement.remove();
    }
};

//Add Book To List.
UI.prototype.addBookToList = function (book) {
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

//Show Alert
UI.prototype.showAlert = function (message, className) {
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


//clear fields
UI.prototype.clearFields = function (e) {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}


//Event Listeners for add
document.getElementById('book-form').addEventListener('submit', function (e) {
    const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value;

    //Instanciate book
    const book = new Book(title, author, isbn);

    //instaniate UI
    const ui = new UI();

    //validate
    if (title === '' || author === '' || isbn === '') {
        ui.showAlert('Please Fill in All fields', 'error');
    } else {
        //Add book to liste
        ui.addBookToList(book);

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

    //show message
    ui.showAlert('Book Removed!', 'success');

    e.preventDefault();
});