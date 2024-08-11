import {IBook} from "../Helper/generateBooks.ts";

export const placeBooks = (shelves: IBook[][][], unplacedBooks: IBook[]) => ({
    type: 'PLACE_BOOKS',
    payload: { shelves, unplacedBooks },
});

export const issueBook = (book: IBook, visitor: string) => ({
    type: 'ISSUE_BOOK',
    payload: { book, visitor },
});
