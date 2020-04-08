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


	static clearFields(){
		const title = document.querySelector("#title").value = '';
		const author = document.querySelector("#author").value = '';
		const isbn = document.querySelector("#isbn").value = '';
			
	}
}


//strore class: handles storage


//events: diplay books


document.addEventListener("DOMContentLoaded", UI.displayBooks());

//event: add book

document.querySelector("#book-form").addEventListener('submit',(e) => {
	//get form values
	e.preventDefault();


	const title = document.querySelector("#title").value;
	const author = document.querySelector("#author").value;
	const isbn = document.querySelector("#isbn").value;


	const book = new Book(title,author,isbn);

//add book to UI

	UI.addBookToList(book);

//clear fields

UI.clearFields();

});


//event: remove book