import { combineReducers } from 'redux';
import {generateBooks} from "../Helper/generateBooks.ts";
import {ILibraryRedux} from "../Interface/ILibraryRedux.ts";

const initialState: ILibraryRedux = {
    books: generateBooks(),
    shelves: Array(5).fill().map(() => Array(5).fill().map(() => [])),
    issuedBooks: [],
    unplacedBooks: generateBooks(),
};

const libraryReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'PLACE_BOOKS':
            return {
                ...state,
                shelves: action.payload.shelves,
                unplacedBooks: action.payload.unplacedBooks,
            };
        case 'ISSUE_BOOK':
            return {
                ...state,
                issuedBooks: [...state.issuedBooks, action.payload],
            };
        default:
            return state;
    }
};

export default combineReducers({
    library: libraryReducer,
});
