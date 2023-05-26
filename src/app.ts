/* eslint-disable no-underscore-dangle */
/* eslint-disable no-redeclare */

import { Category } from './enums';
import { Book, Logger, Author, Librarian } from './interfaces';
import { Ul, RefBook } from './classes/';
import { PersonBook } from './types';
import { bookTitleTransform, printRefBook, createCustomer, createCustomerID, getAllBooks, getBookByID, getBookTitlesByCategory, getProperty, getTitles, logBookTitles, logFirstAvailable, showHello, сheckoutBooks } from './functions';


// showHello('greeting', 'TypeScript');

// function showHello(divName: string, name: string) {
//     const elt = document.getElementById(divName);
//     elt.innerText = `Hello from ${name}`;
// }
// type Book = {
//     id: number;
//     title: string;
//     author: string;
//     availiable: boolean;
// };

// type BookProperties = keyof Book;
// type PersonBook = Person & Book;
// type BookOrUndefined = Book | undefined;

// interface Book {
//     id: number;
//     title: string;
//     author: string;
//     category: Category;
//     pages?: number;
//     available: boolean;
//     markDamaged?: DamageLogger;
// };

// interface DamageLogger {
//     (reason: string): void;
// }

// interface Person {
//     name: string;
//     email: string;
// }

// interface Author extends Person {
//     numBooksPublished: number;
// }

// interface Librarian extends Person {
//     department: string;
//     assistCustomer(custName: string, bookTitle: string): void;
// }

// interface TOptions {
//     duration: number;
//     speed: number;
// }

// enum Category {
//     JavaScript,
//     CSS,
//     HTML,
//     TypeScript,
//     Angular
// }

// function getAllBooks(): ReadonlyArray<Book> {
//     const books: readonly Book[] = <const> [
//         { id: 1, title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true, category: Category.JavaScript },
//         { id: 2, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false, category: Category.JavaScript },
//         { id: 3, title: 'CSS Secrets', author: 'Lea Verou', available: true, category: Category.CSS },
//         { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true, category: Category.JavaScript }
//     ];

//     return books;
// }
// function logFirstAvailable(books: ReadonlyArray<Book> = getAllBooks()): void {
//     console.log('books', books);
//     console.log('books number', books.length);
//     console.log('first available book title', books.find((book: Book): string => book.available ? book.title : 'no available books here'));
// }

// logFirstAvailable(getAllBooks());
// logFirstAvailable();

// function getBookTitlesByCategory(cat: Category = Category.JavaScript): string[] {
//     const books = getAllBooks();
//     return books
//         .filter(({ category }) => category === cat)
//         .map(({ title }) => title);
// }

// function logBookTitles(titles: string[]): void {
//     console.log('book titles', titles);
// }
// logBookTitles(getBookTitlesByCategory(Category.JavaScript));

// function getBookAuthorByIndex(index: number): [bookTitle: string, bookAuthor: string] {
//     const books = getAllBooks();

//     const { title, author } = books[index] ?? {};
//     return [title, author];
// }

// function calcTotalPages(): bigint {

//     const libraries = [
//         {
//             lib: 'libName1', books: 1_000_000_000,
//             avgPagesPerBook: 250
//         },
//         {
//             lib: 'libName2', books: 5_000_000_000,
//             avgPagesPerBook: 300
//         },
//         {
//             lib: 'libName3', books: 3_000_000_000,
//             avgPagesPerBook: 280
//         }
//     ];

//     return libraries.reduce((acc: bigint, data) => acc + BigInt(data.books) * BigInt(data.avgPagesPerBook), 0n);
// }

// function createCustomerID(name: string, id: number): string {
//     return `User ${name} id is ${id}`;
// }

// const myId: string = createCustomerID('Ann', 10);
// console.log(myId);

// let idGenerator: (name: string, id: number) => string;
// let idGenerator: typeof createCustomerID;
// idGenerator = (name: string, id: number) => `User ${name} id is ${id}`;
// idGenerator = createCustomerID;
// console.log(idGenerator('Max', 30));

// function createCustomer(name: string, age?: number, city?: string) {
//     console.log('customer', name);
//     if (age) console.log('customer age', age);
//     if (city) console.log('customer city', city);
// }
// createCustomer('Max', 30, 'Kyiv');
// createCustomer('Lida', 18);
// createCustomer('mikle', undefined, 'Kyiv');
// getBookTitlesByCategory();


// function getBookByID(bookId: number): BookOrUndefined {
//     return getAllBooks().find(({ id }) => id === bookId);
// }
// getBookByID(1);

// function сheckoutBooks(customer: string, ...bookIDs: number[]): string[] {
//     console.log('Customer', customer);

//     return bookIDs
//         .map(id => getBookByID(id))
//         .filter(book => book.available)
//         .map(({ title }) => title);
// }

// сheckoutBooks('first customer', 1, 2);

// function myBooks(): string[] {
//     return сheckoutBooks('Ann', 1, 2, 4);
// }

// function getTitles(author: string): string[];
// function getTitles(available: boolean): string[];
// function getTitles(id: number, available: boolean): string[];
// function getTitles(...args: [string | boolean] | [number, boolean]): string[] {

//     const books = getAllBooks();
//     if (args.length === 1) {
//         const [arg] = args;

//         if (typeof arg === 'string') {
//             return books.filter(({ author }) => author === arg).map(({ title }) => title);
//         } else if (typeof arg === 'boolean') {
//             return books.filter(({ available }) => available === arg).map(({ title }) => title);
//         }
//     } else if (args.length === 2) {
//         const [id, available] = args;

//         if (typeof id === 'number' && typeof available === 'boolean') {
//             return books.filter((book) => book.id === id && book.available === available).map(({ title }) => title);
//         }
//     } else {
//         return [];
//     }
//     return [];
// }

// const checkOutBooks = getTitles(false);
// console.log(checkOutBooks);

// 3.04

// function assertStringValue(param: any): asserts param is string {
//     if (typeof param !== 'string') {
//         throw new Error('value should have been a string');
//     }
// }

// function bookTitleTransform(title: any) {
//     assertStringValue(title);

//     return [...title].reverse().join('');
// }
// bookTitleTransform(1);
// bookTitleTransform('test');


// // 4.01

// const myBook: Book = {
//     id: 5,
//     title: 'Colors, Backgrounds, and Gradients',
//     author: 'Eric A. Meyer',
//     available: true,
//     category: Category.CSS,
//     pages: 200,
//     markDamaged(reason: string) {
//         console.log(`Demaged: ${reason}`);
//     }
// };

// // printBook(myBook);

// 4.2

// let logDamage: Logger;

// logDamage = function (reason: string) {
//     console.log(`Demaged: ${reason}`);
// };

// const favoriteAuthor: Author = {
//     numBooksPublished: 0,
//     name: 'Anna',
//     email: 'anna@test.com'
// };

// const favoriteLibrarian: Librarian = {
//     department: 'Research Dep',
//     assistCustomer: function (custName: string, bookTitle: string): void {
//         throw new Error('Function not implemented.');
//     },
//     name: 'Anna',
//     email: 'anna@test.com'
// };

// 04.04

// const offer: any = {
//     book: {
//         title: 'Essential TypeScript',
//     },
// };

// console.log(offer.magazine);
// console.log(offer.magazine?.getTitle());
// console.log(offer.book?.getTitle());
// console.log(offer.book?.authors[0]);
// console.log(offer.book.authors[0]?.name);

// 04.05

// function getProperty(book: Book, prop: BookProperties): any {
//     const value = book[prop];
//     return typeof value === 'function' ? value.name : value;
// }

// getProperty(myBook, 'title');
// getProperty(myBook, 'markDamaged');
// // getProperty(myBook, 'isBn');


// 5.01

// abstract class ReferenceItem {
//     // title: string;
//     // year: number;

//     // constructor(newTitle: string, newYear: number) {
//     //     console.log('Creating a new ReferenceItem...');
//     //     this.title = newTitle;
//     //     this.year = newYear;
//     // }
//     #id: number;

//     private _publisher: string;

//     static department: string = 'Dep of truth';

//     get publisher(): string {
//         return this._publisher;
//     }

//     set publisher(name: string) {
//         this._publisher = name;
//     }

//     constructor(id: number, protected title: string, protected year: number) {
//         console.log('Creating a new ReferenceItem...');
//         this.#id = id;
//     }
//     printItem(): void {
//         console.log((`${this.title} was published in ${this.year}`));
//         console.log(ReferenceItem.department);
//         console.log(Object.getPrototypeOf(this).constructor.department);
//     }
//     abstract printCitation(): void;

// }

// const ref = new ReferenceItem(1, 'test', 2000);
// ref.printItem();

// 5.02

// class Encyclopedia extends ReferenceItem {
//     edition: number;

//     constructor(id: number, title: string, year: number, edition: number) {
//         super(id, title, year);
//         this.edition = edition;
//     }

//     override printItem(): void {
//         super.printItem();
//         console.log(`Edition: edition ${this.year}`);
//     }
//     printCitation() {
//         console.log(`${this.title}-${this.year}`);
//     }
// }

const refBook = new RefBook(2, 'New Cyclopedia', 2000, 1);
refBook.printItem();
printRefBook(refBook);
// refBook.printCitation();

const ul = new Ul.UniversityLibrarian();
printRefBook(ul);

// class UniversityLibrarian implements Librarian {
//     department: string;
//     name: string;
//     email: string;

//     assistCustomer(custName: string, bookTitle: string) {
//         console.log(`${this.name} is assisting ${custName} with book ${bookTitle}`);
//     }
// }

// const favoriteLibrarian: Librarian = new UniversityLibrarian();

// 05.05

const personBook: PersonBook = {
    author: 'test',
    available: true,
    category: Category.HTML,
    email: 'test@test.com',
    name: 'test',
    title: 'unknown',
    id: 3
};

// function setDefaultConfig(options: TOptions): TOptions {
//     options.duration ?? 100;
//     options.speed ?? 10;
//     return options;
// }

// 6.05

const flag = true;

if (flag) {
    import('./classes')
        .then((module) => {
            const reader = new module.Reader();
            console.log(reader);

        })
        .catch(err => console.log(err));
}
