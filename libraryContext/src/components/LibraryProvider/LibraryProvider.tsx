import { createContext, useState } from 'react';
import {generateBooks, IBook} from "../../Helper/generateBooks.ts";
import {ILibraryActions, ILibraryContext} from "./Interface/ILibraryContext.ts";

export const LibraryContext = createContext<ILibraryContext>({});

export let libraryActions: ILibraryActions

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
    };

    libraryActions = {
        setShelves: (newShelves: any) => {
            setShelves(newShelves)
        },
        setIssuedBooks: (newIssuedBooks: any) => {
            setIssuedBooks(newIssuedBooks)
        },
        setUnplacedBooks: (newUnplacedBooks: any) => {
            setUnplacedBooks(newUnplacedBooks)
        }
    }

    return <LibraryContext.Provider value={value}>{children}</LibraryContext.Provider>;
};


