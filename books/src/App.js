import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import axios from "axios";
import { useState } from "react";

function App() {
  const [books, setBooks] = useState([]);

  // create a new book and update the books state
  const createBook = async (title) => {
    const response = await axios.post(" http://localhost:3001/books", {
      title,
    });

    // add the new book to the books array
    const updatedBooks = [...books, response.data];

    // update the books state with the updated books array
    setBooks(updatedBooks);
  };

  // delete a book by id and update the books state
  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updatedBooks);
  };

  // edit a book by id and update the books state
  const editBookById = (id, title) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: title };
      }
      return book;
    });

    // update the books state
    setBooks(updatedBooks);
  };

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
