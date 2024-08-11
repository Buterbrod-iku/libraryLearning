import {useSelector} from "react-redux";
import {IStore} from "../../Interface/ILibraryRedux.ts";


const VisitorBookList = () => {
    const { issuedBooks } = useSelector((state: IStore) => state.library);

    return (
        <div>
            <h2>Visitor Book List</h2>
            <ul>
                {issuedBooks.map((entry, index) => (
                    <li key={index}>{entry.visitor} took {entry.book.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default VisitorBookList;
