import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import { useEffect, useContext } from "react";
import BooksContext from "./context/books";

function App() {
  // destructure fetchBooks from BooksContext
  const { fetchBooks } = useContext(BooksContext);

  // fetch all the books when the app loads up
  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList />
      <BookCreate />
    </div>
  );
}

export default App;
