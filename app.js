//book class
 class Book {
	constructor(title,author,isbn){
		this.title = title;
		this.author = author;
		this.isbn = isbn;
	}
}


//UI class: UI tasks

class UI {

	static displayBooks(){
		

		const StoredBooks = [
			{
				title: 'Book one',
				author: 'JJF Roling',
				isbn: '34343434'
			},
			{
				title: 'Book two',
				author: 'Leopold Staff',
				isbn: '56565656'
			},
			{
				title: 'Book three',
				author: 'Maria Konopnicka',
				isbn: '90909090'
			}
		];

		const books = StoredBooks;


		books.forEach((book)=> UI.addBookToList(book));
	}

	static addBookToList(book){
		const list = document.querySelector('#book-list');


		const row = document.createElement('tr'); 

		row.innerHTML = `
			<td>${book.title}</td>
			<td>${book.author}</td>
			<td>${book.isbn}</td>
			<td><a href="#" class="btn btn-danger btn-sm delete"</td>X</a></td>
		`;

		list.appendChild(row);
	}

	static deleteBook(el){
		if(el.classList.contains('delete')){
			el.parentElement.parentElement.remove();
		}
	}

	static showAlert(message,className){
		const div = document.createElement("div");
		div.className = `alert alert-${className}`;
		div.appendChild(document.createTextNode(message));
		const container = document.querySelector('.container');
		const form = document.querySelector('#book-form');
		container.insertBefore(div, form);
		//vanish in 3 sec
		setTimeout(() => document.querySelector('.alert').remove(), 3000);
	}

	static clearFields(){
		const title = document.querySelector("#title").value = '';
		const author = document.querySelector("#author").value = '';
		const isbn = document.querySelector("#isbn").value = '';
			
	}



}


//strore class: handles storage


class Store(){
	
}




//events: diplay books


document.addEventListener("DOMContentLoaded", UI.displayBooks());

//event: add book

document.querySelector("#book-form").addEventListener('submit',(e) => {
	
	e.preventDefault();

	//get form values

	const title = document.querySelector("#title").value;
	const author = document.querySelector("#author").value;
	const isbn = document.querySelector("#isbn").value;

//validation
	if(title === '' || author === '' || isbn === ''){
		UI.showAlert("please fill all fields", 'danger')
	} else {

//instatiate book
	const book = new Book(title,author,isbn);

//add book to UI

	UI.addBookToList(book);


//valid succes message

	UI.showAlert("Book added", 'success');

//clear fields

	UI.clearFields();
	}
	


});


//event: remove book

document.querySelector("#book-list").addEventListener('click',(e) => {
	UI.deleteBook(e.target);

	UI.showAlert("Book deleted", 'info');
});