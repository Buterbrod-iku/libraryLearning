import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {placeBooks} from "../../actions/libraryAction.ts";
import {IStore} from "../../Interface/ILibraryRedux.ts";


const Library = () => {
    const { books, shelves, unplacedBooks } = useSelector((state: IStore) => state.library);
    const dispatch = useDispatch();

    useEffect(() => {
        const newShelves = [...shelves];
        const remainingBooks = [...unplacedBooks];

        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                if (newShelves[i][j].length < 10) {
                    const toAdd = remainingBooks.splice(0, 10 - newShelves[i][j].length);
                    newShelves[i][j] = [...newShelves[i][j], ...toAdd];
                }
            }
        }

        dispatch(placeBooks(newShelves, remainingBooks));
    }, [books]);

    return (
        <div>
            <h1>Library</h1>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(5, 1fr)',
            }}>
                {shelves.map((shelf, i) => (
                    <div key={i}>
                        <h3>Shelf {i + 1}</h3>
                        {shelf.map((row, j) => (
                            <div key={j}>
                                <h4>Row {j + 1}</h4>
                                <ul>
                                    {row.map((book) => (
                                        <li key={book.id}>{book.title} by {book.author}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Library;
