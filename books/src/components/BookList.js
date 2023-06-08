import BookShow from "./BookShow";

function BookList({ books, onDelete }) {
  // list of rendered books
  const renderedBooks = books.map((book) => {
    return <BookShow onDelete={onDelete} key={book.id} book={book} />;
  });
  return <div className="book-list">{renderedBooks}</div>;
}

export default BookList;
