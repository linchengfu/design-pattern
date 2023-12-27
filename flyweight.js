/**
 * @class Book
 * @property title author isbn
 */
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn
  }
}

// 每本书的单个实例集合
const isbnBooks = new Map()

// 所有图书（包括相同书的copies)
const books = []

/**
 * @function 创建book实例
 */
const createBook = (title, author, isbn) => {
  if (isbnBooks.has(isbn)) {
    return isbnBooks.get(isbn)
  }

  const newBook = new Book(title, author, isbn)
  isbnBooks.set(isbn, newBook)
  return newBook
}

const addBook = (title, author, isbn, availability, sales) => {
  const book = {
    ...createBook(title, author, isbn),
    isbn, availability,
    sales
  }

  books.push(book)
  return book
}

/**
 * @conclusion
 * 利用js的继承特性，对于isbn相同的书籍只有一个实例
 * 优点：节省内存
 */


addBook("Harry Potter", "JK Rowling", "AB123", false, 100);
addBook("Harry Potter", "JK Rowling", "AB123", true, 50);
addBook("To Kill a Mockingbird", "Harper Lee", "CD345", true, 10);
addBook("To Kill a Mockingbird", "Harper Lee", "CD345", false, 20);
addBook("The Great Gatsby", "F. Scott Fitzgerald", "EF567", false, 20);

console.log("Total amount of copies: ", books.length);
console.log("Total amount of books: ", isbnBooks.size);