import { createContext, useState } from "react";
import axios from "axios";

const BooksContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);

  // get the list of all the books
  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");
    // set the books state
    setBooks(response.data);
  };

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

  // object that will be shared across the application
  const valueToShare = {
    books,
    createBook,
    editBookById,
    deleteBookById,
    fetchBooks,
  };

  return (
    <BooksContext.Provider value={valueToShare }>
      {children}
    </BooksContext.Provider>
  );
}

export { Provider }; // named export
export default BooksContext; // default export

// import BooksExport, {Provider} from './context/books'
