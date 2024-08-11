import {IBook} from "../Helper/generateBooks.ts";

export interface IStore {
    library: ILibraryRedux;
}

export interface ILibraryRedux {
    books: IBook[];
    shelves: IBook[][][];
    issuedBooks: IIssuedBooks[];
    unplacedBooks: IBook[];
}

export interface IIssuedBooks {
    book: IBook;
    visitor: string;
}