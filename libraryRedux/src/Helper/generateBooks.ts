import {COUNT_BOOKS_IN_LIBRARY} from "./Const/LibraryConst.ts";

export interface IBook {
    id: number;
    title: string;
    author: string;
}

export const generateBooks = (): IBook[] => {
    const books = [];
    for (let i = 0; i <= COUNT_BOOKS_IN_LIBRARY; i++) {
        books.push({ id: i, title: `Book ${i}`, author: `Author ${Math.floor(i / 10)}` });
    }
    return books.sort((a, b) => a.author.localeCompare(b.author));
};