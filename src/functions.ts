/* eslint-disable @typescript-eslint/indent */
import { Book } from './interfaces';
import { Category } from './enums';
import { BookProperties, BookOrUndefined } from './types';
import { default as RefBook } from './classes/encyclopedia';


export function showHello(divName: string, name: string): void {
  const elt = document.getElementById(divName);
  elt.innerText = `Hello from ${name}`;
  console.log(elt);
}

export function getAllBooks(): ReadonlyArray<Book> {
  const books: readonly Book[] = <const> [
    { id: 1, title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true, category: Category.JavaScript },
    { id: 2, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false, category: Category.JavaScript },
    { id: 3, title: 'CSS Secrets', author: 'Lea Verou', available: true, category: Category.CSS },
    { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true, category: Category.JavaScript }
  ];

  return books;
}

export function logFirstAvailable(books: ReadonlyArray<Book> = getAllBooks()): void {
  console.log('books', books);
  console.log('books number', books.length);
  console.log('first available book title', books.find((book: Book): string => book.available ? book.title : 'no available books here'));
}

export function getBookTitlesByCategory(cat: Category = Category.JavaScript): string[] {
  const books = getAllBooks();
  return books
    .filter(({ category }) => category === cat)
    .map(({ title }) => title);
}

export function logBookTitles(titles: string[]): void {
  console.log('book titles', titles);
}

export function getBookAuthorByIndex(index: number): [bookTitle: string, bookAuthor: string] {
  const books = getAllBooks();

  const { title, author } = books[index] ?? {};
  return [title, author];
}

export function calcTotalPages(): bigint {

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

export function createCustomerID(name: string, id: number): string {
  return `User ${name} id is ${id}`;
}

export function createCustomer(name: string, age?: number, city?: string) {
  console.log('customer', name);
  if (age) console.log('customer age', age);
  if (city) console.log('customer city', city);
}

export function getBookByID(bookId: number): BookOrUndefined {
  return getAllBooks().find(({ id }) => id === bookId);
}

export function сheckoutBooks(customer: string, ...bookIDs: number[]): string[] {
  console.log('Customer', customer);

  return bookIDs
    .map(id => getBookByID(id))
    .filter(book => book.available)
    .map(({ title }) => title);
}

export function myBooks(): string[] {
  return сheckoutBooks('Ann', 1, 2, 4);
}

export function getTitles(author: string): string[];
export function getTitles(available: boolean): string[];
export function getTitles(id: number, available: boolean): string[];
export function getTitles(...args: [string | boolean] | [number, boolean]): string[] {

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

export function assertStringValue(param: any): asserts param is string {
  if (typeof param !== 'string') {
    throw new Error('value should have been a string');
  }
}

export function bookTitleTransform(title: any) {
  assertStringValue(title);

  return [...title].reverse().join('');
}

export function getProperty(book: Book, prop: BookProperties): any {
  const value = book[prop];
  return typeof value === 'export function' ? value.name : value;
}

export function setDefaultConfig(options: TOptions): TOptions {
  options.duration ?? 100;
  options.speed ?? 10;
  return options;
}

export function assertRefBookInstance(condition: any): asserts condition {
  if (!condition) throw new Error('It is not an instance of RefBook');
}

export function printRefBook(data: any): void {
  assertRefBookInstance(data instanceof RefBook);
  data.printItem();
}