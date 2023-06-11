import useBooksContext from "../hooks/use-books-context";
import BookShow from "./BookShow";

function BookList() {
  // destructuring books state from BooksContext
  const { books } = useBooksContext();

  // list of rendered books
  const renderedBooks = books?.map((book) => {
    return <BookShow key={book.id} book={book} />;
  });
  return <div className="book-list">{renderedBooks}</div>;
}

export default BookList;
