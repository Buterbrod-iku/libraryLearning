import {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {issueBook} from "../../actions/libraryAction.ts";
import {IBook} from "../../Helper/generateBooks.ts";
import {IStore} from "../../Interface/ILibraryRedux.ts";

interface IVisitor {
    name: string;
}

const Visitor = ({name}: IVisitor) => {
    const { shelves, issuedBooks } = useSelector((state: IStore) => state.library);

    const dispatch = useDispatch();

    const [selectedBooks, setSelectedBooks] = useState<IBook[]>([]);

    const handleSelectBook = (book: IBook) => {
        if (selectedBooks.length < 7 && !issuedBooks.some(b => b.book.id === book.id)) {
            setSelectedBooks([...selectedBooks, book]);
            dispatch(issueBook(book, name));
        }
    };

    return (
        <div>
            <h2 style={{ textAlign: 'center'}}>{name}</h2>
            <h3  style={{ textAlign: 'center'}}>Select Books:</h3>
            {shelves.map((shelf, i) => (
                <div key={i}>
                    <h4  style={{ textAlign: 'center', color: 'red'}}>Shelf {i + 1}</h4>
                    {shelf.map((row, j) => (
                        <div key={j}>
                            <ul style={{
                                width: '100vw',
                                display: 'grid',
                                gridTemplateColumns: 'repeat(5, 1fr)',
                            }}>
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
