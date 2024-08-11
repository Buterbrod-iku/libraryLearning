import { createContext, useState } from 'react';
import {generateBooks, IBook} from "../../Helper/generateBooks.ts";
import {ILibraryContext} from "./Interface/ILibraryContext.ts";

export const LibraryContext = createContext<ILibraryContext>({});

export const LibraryProvider = ({ children }) => {
    const [books] = useState<IBook[]>(generateBooks());
    const [shelves, setShelves] = useState(Array(5).fill().map(() => Array(5).fill().map(() => [])));
    const [issuedBooks, setIssuedBooks] = useState([]);
    const [unplacedBooks, setUnplacedBooks] = useState([...books]);

    const value: ILibraryContext = {
        books,
        shelves,
        issuedBooks,
        unplacedBooks,
        setShelves,
        setIssuedBooks,
        setUnplacedBooks,
    };

    console.log('shelves',shelves)
    console.log('issuedBooks',issuedBooks)
    console.log('unplacedBooks',unplacedBooks)

    return <LibraryContext.Provider value={value}>{children}</LibraryContext.Provider>;
};


