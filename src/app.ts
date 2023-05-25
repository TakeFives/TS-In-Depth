/* eslint-disable no-redeclare */

showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}
type BookProperties = keyof Book;

// type Book = {
//     id: number;
//     title: string;
//     author: string;
//     availiable: boolean;
// };
interface Book {
    id: number;
    title: string;
    author: string;
    category: Category;
    pages?: number;
    available: boolean;
    markDamaged?: DamageLogger;
};

interface DamageLogger {
    (reason: string): void;
}

interface Person {
    name: string;
    email: string;
}

interface Author extends Person {
    numBooksPublished: number;
}

interface Librarian extends Person {
    department: string;
    assistCustomer(custName: string, bookTitle: string): void;
}

enum Category {
    JavaScript,
    CSS,
    HTML,
    TypeScript,
    Angular
}

function getAllBooks(): ReadonlyArray<Book> {
    const books: readonly Book[] = <const> [
        { id: 1, title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true, category: Category.JavaScript },
        { id: 2, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false, category: Category.JavaScript },
        { id: 3, title: 'CSS Secrets', author: 'Lea Verou', available: true, category: Category.CSS },
        { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true, category: Category.JavaScript }
    ];

    return books;
}
function logFirstAvailable(books: ReadonlyArray<Book> = getAllBooks()): void {
    console.log('books', books);
    console.log('books number', books.length);
    console.log('first available book title', books.find((book: Book): string => book.available ? book.title : 'no available books here'));
}

logFirstAvailable(getAllBooks());
logFirstAvailable();

function getBookTitlesByCategory(cat: Category = Category.JavaScript): string[] {
    const books = getAllBooks();
    return books
        .filter(({ category }) => category === cat)
        .map(({ title }) => title);
}

function logBookTitles(titles: string[]): void {
    console.log('book titles', titles);
}
logBookTitles(getBookTitlesByCategory(Category.JavaScript));

function getBookAuthorByIndex(index: number): [bookTitle: string, bookAuthor: string] {
    const books = getAllBooks();

    const { title, author } = books[index] ?? {};
    return [title, author];
}

function calcTotalPages(): bigint {

    const libraries = [
        {
            lib: 'libName1', books: 1_000_000_000,
            avgPagesPerBook: 250
        },
        {
            lib: 'libName2', books: 5_000_000_000,
            avgPagesPerBook: 300
        },
        {
            lib: 'libName3', books: 3_000_000_000,
            avgPagesPerBook: 280
        }
    ];

    return libraries.reduce((acc: bigint, data) => acc + BigInt(data.books) * BigInt(data.avgPagesPerBook), 0n);
}

function createCustomerID(name: string, id: number): string {
    return `User ${name} id is ${id}`;
}

const myId: string = createCustomerID('Ann', 10);
console.log(myId);

// let idGenerator: (name: string, id: number) => string;
let idGenerator: typeof createCustomerID;
idGenerator = (name: string, id: number) => `User ${name} id is ${id}`;
idGenerator = createCustomerID;
console.log(idGenerator('Max', 30));

function createCustomer(name: string, age?: number, city?: string) {
    console.log('customer', name);
    if (age) console.log('customer age', age);
    if (city) console.log('customer city', city);
}
createCustomer('Max', 30, 'Kyiv');
createCustomer('Lida', 18);
createCustomer('mikle', undefined, 'Kyiv');
getBookTitlesByCategory();


function getBookByID(bookId: number): Book {
    return getAllBooks().find(({ id }) => id === bookId);
}
getBookByID(1);

function сheckoutBooks(customer: string, ...bookIDs: number[]): string[] {
    console.log('Customer', customer);

    return bookIDs
        .map(id => getBookByID(id))
        .filter(book => book.available)
        .map(({ title }) => title);
}

сheckoutBooks('first customer', 1, 2);

function myBooks(): string[] {
    return сheckoutBooks('Ann', 1, 2, 4);
}

function getTitles(author: string): string[];
function getTitles(available: boolean): string[];
function getTitles(id: number, available: boolean): string[];
function getTitles(...args: [string | boolean] | [number, boolean]): string[] {

    const books = getAllBooks();
    if (args.length === 1) {
        const [arg] = args;

        if (typeof arg === 'string') {
            return books.filter(({ author }) => author === arg).map(({ title }) => title);
        } else if (typeof arg === 'boolean') {
            return books.filter(({ available }) => available === arg).map(({ title }) => title);
        }
    } else if (args.length === 2) {
        const [id, available] = args;

        if (typeof id === 'number' && typeof available === 'boolean') {
            return books.filter((book) => book.id === id && book.available === available).map(({ title }) => title);
        }
    } else {
        return [];
    }
    return [];
}

const checkOutBooks = getTitles(false);
console.log(checkOutBooks);

// 3.04

function assertStringValue(param: any): asserts param is string {
    if (typeof param !== 'string') {
        throw new Error('value should have been a string');
    }
}

function bookTitleTransform(title: any) {
    assertStringValue(title);

    return [...title].reverse().join('');
}
bookTitleTransform(1);
bookTitleTransform('test');


// 4.01

const myBook: Book = {
    id: 5,
    title: 'Colors, Backgrounds, and Gradients',
    author: 'Eric A. Meyer',
    available: true,
    category: Category.CSS,
    pages: 200,
    markDamaged(reason: string) {
        console.log(`Demaged: ${reason}`);
    }
};

// printBook(myBook);

// 4.2

let logDamage: DamageLogger;

logDamage = function (reason: string) {
    console.log(`Demaged: ${reason}`);
};

const favoriteAuthor: Author = {
    numBooksPublished: 0,
    name: 'Anna',
    email: 'anna@test.com'
};

const favoriteLibrarian: Librarian = {
    department: 'Research Dep',
    assistCustomer: function (custName: string, bookTitle: string): void {
        throw new Error('Function not implemented.');
    },
    name: 'Anna',
    email: 'anna@test.com'
};

// 04.04

const offer: any = {
    book: {
        title: 'Essential TypeScript',
    },
};

console.log(offer.magazine);
console.log(offer.magazine?.getTitle());
console.log(offer.book?.getTitle());
console.log(offer.book?.authors[0]);
console.log(offer.book.authors[0]?.name);

// 04.05

function getProperty(book: Book, prop: BookProperties): any {
    const value = book[prop];
    return typeof value === 'function' ? value.name : value;
}

getProperty(myBook, 'title');
getProperty(myBook, 'markDamaged');
// getProperty(myBook, 'isBn');


