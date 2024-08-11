import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/libraryReducer.ts';
import Librarian from "./components/Librarian/Librarian.tsx";
import Visitor from "./components/Visitor/Visitor.tsx";
import VisitorBookList from "./components/VisitorBookList/VisitorBookList.tsx";
import Library from "./components/Library/Library.tsx";

const store = createStore(rootReducer);

const App = () => (
    <Provider store={store}>
            <h1>Library System Redux</h1>
            <Library/>
            <hr/>
            <Librarian/>
            <hr/>
            <Visitor name="Visitor 1"/>
            <Visitor name="Visitor 2"/>
            <Visitor name="Visitor 3"/>
            <Visitor name="Visitor 4"/>
            <Visitor name="Visitor 5"/>
            <hr/>
            <VisitorBookList/>
    </Provider>
);

export default App;
