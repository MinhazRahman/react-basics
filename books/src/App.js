import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [books, setBooks] = useState([]);

  // get the list of all the books
  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");
    // set the books state
    setBooks(response.data);
  };

  // fetch all the books when the app loads up
  useEffect(() => {
    fetchBooks();
  }, []);

  // create a new book and update the books state
  const createBook = async (title) => {
    const response = await axios.post("http://localhost:3001/books", {
      title,
    });

    // add the new book to the books array
    const updatedBooks = [...books, response.data];

    // update the books state with the updated books array
    setBooks(updatedBooks);
  };

  // delete a book by id and update the books state
  const deleteBookById = async (id) => {
    const response = await axios.delete(`http://localhost:3001/books/${id}`);

    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updatedBooks);
  };

  // edit a book by id and update the books state
  const editBookById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
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
