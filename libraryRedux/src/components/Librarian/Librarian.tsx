import {useSelector} from "react-redux";
import {IStore} from "../../Interface/ILibraryRedux.ts";


const Librarian = () => {
    const { issuedBooks, unplacedBooks } = useSelector((state: IStore) => state.library);

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
            <div>
                <ul style={{
                    width: '100vw',
                    display: 'grid',
                    flexWrap: 'wrap',
                    gridTemplateColumns: 'repeat(7, 1fr)',
                }}>
                    {unplacedBooks.map((book) => (
                        <li key={book.id}>{book.title} by {book.author}</li>
                    ))}
                </ul>
            </div>

        </div>
    );
};

export default Librarian;
