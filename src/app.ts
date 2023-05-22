showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

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
    available: boolean;
};

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
function logFirstAvailable(books: ReadonlyArray<Book>): void {
    console.log('books', books);
    console.log('books number', books.length);
    console.log('first available book title', books.find((book: Book): string => book.available ? book.title : 'no available books here'));
}

logFirstAvailable(getAllBooks());

function getBookTitlesByCategory(cat: Category): string[] {
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
