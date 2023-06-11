import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import { useEffect } from "react";
import useBooksContext from "./hooks/use-books-context";

function App() {
  // destructure fetchBooks from BooksContext
  const { fetchBooks } = useBooksContext();

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
