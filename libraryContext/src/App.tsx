import {LibraryProvider} from "./components/LibraryProvider/LibraryProvider.tsx";
import Library from "./components/Library/Library.tsx";
import Librarian from "./components/Librarian/Librarian.tsx";
import Visitor from "./components/Visitor/Visitor.tsx";
import VisitorBookList from "./components/VisitorBookList/VisitorBookList.tsx";

const App = () => {
    return (
        <LibraryProvider>
            <div>
                <h1>Library System</h1>
                <Library />
                <hr/>
                <Librarian />
                <hr/>
                <Visitor name="Visitor 1" />
                <Visitor name="Visitor 2" />
                <Visitor name="Visitor 3" />
                <Visitor name="Visitor 4" />
                <Visitor name="Visitor 5" />
                <hr/>
                <VisitorBookList />
            </div>
        </LibraryProvider>
    );
};

export default App;
