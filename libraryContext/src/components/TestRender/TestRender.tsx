import {libraryActions} from "../LibraryProvider/LibraryProvider.tsx";


const TestRender = () => {
    console.log("TestRender");

    const setTestRender = (e) => {
        e.preventDefault()
        libraryActions.setShelves([])
        libraryActions.setIssuedBooks([])
        libraryActions.setUnplacedBooks([])
    }

    return (
        <div>
            <button onClick={setTestRender}>hello</button>
        </div>
    );
};

export default TestRender;