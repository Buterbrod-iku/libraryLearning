import {IBook} from "../../../Helper/generateBooks.ts";

export interface IIssuedBooks {
    book: IBook;
    visitor: string;
}

export interface ILibraryContext {
    books: IBook[];
    shelves: IBook[][][];
    issuedBooks: IIssuedBooks[];
    unplacedBooks: IBook[];
}

export interface ILibraryActions {
    setShelves: any;
    setIssuedBooks: any;
    setUnplacedBooks: any;
}