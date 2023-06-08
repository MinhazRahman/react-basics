import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import { useState } from "react";

function App() {
  const [books, setBooks] = useState([]);

  // create a new book and update the books state
  const createBook = (title) => {
    const newBook = { id: Math.round(Math.random() * 9999), title: title };
    const updatedBooks = [...books, newBook];

    setBooks(updatedBooks);
  };
  return (
    <div className="app">
      <BookList books={books} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
