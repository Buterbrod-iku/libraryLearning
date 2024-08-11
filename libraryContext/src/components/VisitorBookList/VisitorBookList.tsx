import {LibraryContext} from "../LibraryProvider/LibraryProvider.tsx";
import {useContext} from "react";


const VisitorBookList = () => {
    const { issuedBooks } = useContext(LibraryContext);

    console.log("VisitorBookList");

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
