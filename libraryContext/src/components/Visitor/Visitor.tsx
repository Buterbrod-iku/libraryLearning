import {useContext, useState} from 'react';
import {libraryActions, LibraryContext} from "../LibraryProvider/LibraryProvider.tsx";
import { IBook } from '../../Helper/generateBooks.ts';

interface IVisitor {
    name: string;
}

const Visitor = ({name}: IVisitor) => {
    const {shelves, issuedBooks} = useContext(LibraryContext);
    const [selectedBooks, setSelectedBooks] = useState<IBook[]>([]);

    console.log('Visitor')

    const handleSelectBook = (book: IBook) => {
        if (selectedBooks.length < 7 && !issuedBooks.some(b => b.book.id === book.id)) {
            setSelectedBooks([...selectedBooks, book]);
            libraryActions.setIssuedBooks([...issuedBooks, { book, visitor: name }]);
        }
    };

    return (
        <div>
            <h2>{name}</h2>
            <h3>Select Books:</h3>
            {shelves.map((shelf, i) => (
                <div key={i}>
                    <h4>Shelf {i + 1}</h4>
                    {shelf.map((row, j) => (
                        <div key={j}>
                            <ul>
                                {row.map((book) => (
                                    <li key={book.id}>
                                        {book.title} by {book.author}
                                        <button onClick={() => handleSelectBook(book)} disabled={selectedBooks.includes(book)}>
                                            Take
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            ))}

            <h3>Your Selected Books:</h3>
            <ul>
                {selectedBooks.map((book: IBook) => (
                    <li key={book.id}>{book.title} by {book.author}</li>
                ))}
            </ul>
        </div>
    );
};

export default Visitor;
