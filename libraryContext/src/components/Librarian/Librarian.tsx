import {LibraryContext} from "../LibraryProvider/LibraryProvider.tsx";
import {useContext} from "react";


const Librarian = () => {
    const { issuedBooks, unplacedBooks } = useContext(LibraryContext);

    console.log('Librarian')

    return (
        <div>
            <h2>Librarian</h2>
            <h3>Issued Books:</h3>
            <ul>
                {issuedBooks.map((entry, index) => (
                    <li key={index}>{entry.book.title} taken by {entry.visitor}</li>
                ))}
            </ul>

            <h3>Unplaced Books:</h3>
            <ul>
                {unplacedBooks.map((book) => (
                    <li key={book.id}>{book.title} by {book.author}</li>
                ))}
            </ul>
        </div>
    );
};

export default Librarian;
