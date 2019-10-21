
export default class Library {

  constructor() {
    this.bookList = [];
    this.lastBook = null;
    this.currentBook = null;
    this.nextBook = null;
    this.unreadBooks = 0;
  }

  addBook(book) {
    this.bookList.push(book);

    if (!book.isRead) {
      this.unreadBooks++;

      if (this.nextBook === null) {
        this.nextBook = book;
      }
    }
  }

  listAllBooks() {
    console.table(this.bookList);
    console.log(this.currentBook);
    console.log(this.nextBook);
    this.listBooks(this.bookList);
  }

  startReadingNextBook() {
    console.log("funguje")
    if (this.nextBook !== null) {

      this.currentBook = this.nextBook;
      this.nextBook = null;
      this.currentBook.reading();


      for (let book of this.bookList) {
        if (!book.isRead && book !== this.currentBook) {
          this.nextBook = book;
          break;
        }
      }
      this.listAllBooks();
    }

  }

  finishCurrentBook() {
    if (this.currentBook !== null) {
      this.currentBook.read();
      this.lastBook = this.currentBook;
      this.currentBook = null;
      this.listAllBooks();
    }

  }

  listUnreadBooks() {
    this.unreadBooks = this.bookList.filter(book => book.isRead === false);
    console.table(this.unreadBooks);
    this.listBooks(this.unreadBooks);
  }

  listBooks(books) {
    let booksToDisplay = books.reduce(function (prevVal, currVal) {
      return prevVal + currVal.renderHTML();
    }, '');
    document.getElementById('booklist').innerHTML = booksToDisplay;
  }
}

