// 1) Создание blueprint для будущих экземпляров классов Book и Library.

// 1.1) Book Class.
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.isAvailable = true;
  }
}

// 1.2) Library Class.
class Library {
  constructor() {
    this.books = [];
  }

  // 1.2.1) Метод добавления книги в библиотеку.
  addBook(book) {
    this.books.push(book);
    console.log(`Книга "${book.title}" добавлена в библиотеку.`);
  }

  // 1.2.2) Метод взятия книги по уникальному ISBN.
  borrowBook(isbn) {
    const book = this.books.find((b) => b.isbn === isbn);
    if (book) {
      if (book.isAvailable) {
        book.isAvailable = false;
        console.log(`Книга "${book.title}" взята.`);
      } else {
        console.log(`Книга "${book.title}" уже была взята.`);
      }
    } else {
      console.log("Книга с таким ISBN не найдена.");
    }
  }

  // 1.2.3) Метод возврата книги по ISBN.
  returnBook(isbn) {
    const book = this.books.find((b) => b.isbn === isbn);
    if (book) {
      if (!book.isAvailable) {
        book.isAvailable = true;
        console.log(`Книга "${book.title}" возвращена в библиотеку.`);
      } else {
        console.log(`Книга "${book.title}" доступна.`);
      }
    } else {
      console.log("Книга с таким ISBN не найдена.");
    }
  }

  // 1.2.4) Метод отображения списка доступных книг.
  listAvailableBooks() {
    const availableBooks = this.books.filter((book) => book.isAvailable);
    if (availableBooks.length > 0) {
      console.log("Доступные книги:");
      availableBooks.forEach((book) => {
        console.log(
          `- ${book.title} (Автор: ${book.author}, ISBN: ${book.isbn})`
        );
      });
    } else {
      console.log("Нет доступных книг.");
    }
  }
}

// 2) Тестирование системы управления библиотекой.

// 2.2) Создание экземпляров книг.
const book1 = new Book("Мёртвая зона", "Стивен Кинг", "1111111111");
const book2 = new Book("Идиот", "Ф. М. Достоевский", "2222222222");

// 2.3) Создание экземпляра библиотеки.
const library = new Library();

// 3) Вызовы методов классов.

// 3.1) Добавление книг в библиотеку
library.addBook(book1);
library.addBook(book2);

// 3.2) Список доступных книг
library.listAvailableBooks();

// 3.3) Взятие книги
library.borrowBook("1111111111");

// 3.4) Повторная попытка взять ту же книгу
library.borrowBook("1111111111");

// 3.5) Возврат книги
library.returnBook("1111111111");

// 3.6) Попытка вернуть уже доступную книгу
library.returnBook("1111111111");

// 3.7) Список доступных книг.
library.listAvailableBooks();
