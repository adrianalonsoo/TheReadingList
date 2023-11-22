// Book Class: Represents a Book
class Book{
    constructor(title,genre,author){
        this.title=title;
        this.genre=genre;
        this.author=author;
        this.read=false;
        this.readDate=Date.now;
    }
}
  
   
  
  // Biblioteca Class: Handles Storage
  class Biblioteca {

    constructor(){
        this.leidos=0;
        this.porLeer=0;
        this.listaLibros=[];
        this.libroActual=libroActual
        this.ultimoLibro=ultimoLibro;
        this.proxLibro=proxLibro;
        this.ultimoLibroLeido=ultimoLibroLeido;
    }


    static verLibros() {
      const books = Biblioteca.getLibros();
  
      books.forEach((book) =>Biblioteca.addLibro(book));
    }
  
    static addLibro(book) {
      const list = document.querySelector('#book-list');
  
      const row = document.createElement('tr');
  
      row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.genre}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
      `;
  
      list.appendChild(row);
    }
  
    static borrarLibro(el) {
      if(el.classList.contains('delete')) {
        el.parentElement.parentElement.remove();
      }
    }
  
   
  
    static limpiarCampos() {
      document.querySelector('#title').value = '';
      document.querySelector('#author').value = '';
      document.querySelector('#genre').value = '';
    }
     static getLibros() {
      let books;
      if(localStorage.getItem('books') === null) {
        books = [];
      } else {
        books = JSON.parse(localStorage.getItem('books'));
      }
  
      return books;
    }
  
    static addBook(book) {
      const books = Biblioteca.getLibros();
      books.push(book);
      localStorage.setItem('books', JSON.stringify(books));
    }
  
    static removeBook(title) {
      const books = Biblioteca.getLibros();
  
      books.forEach((book, index) => {
        if(book.title === title) {
          books.splice(index, 1);
        }
      });
  
    }
  }
  
  // Evento ver libros
  document.addEventListener('DOMContentLoaded',Biblioteca.verLibros);
  
  // Evento añadir libro
  document.querySelector('#formulario').addEventListener('submit', (e) => {
    e.preventDefault();
  
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const genre = document.querySelector('#genre').value;
  
    // validar
    if(title === '' || author === '' || genre === '') {
    
    } else {

      const book = new Book(title, author, genre);
  
      Biblioteca.addLibro(book);
    
      Biblioteca.addBook(book);
  
      Biblioteca.limpiarCampos();
    }
  });
  
    // Evento borrar libro
    document.querySelector('#book-list').addEventListener('click', (e) => {
    // Borrar libro de la vista
    Biblioteca.borrarLibro(e.target);
    // Borrar libro de la biblioteca
    Biblioteca.removeBook(e.target.parentElement.previousElementSibling.textContent);
  });
  

  document.getElementById("borrarLibros").addEventListener('click',(e)=>{
    const books = Biblioteca.getLibros();
    localStorage.removeItem("books",JSON.stringify(books));
  });