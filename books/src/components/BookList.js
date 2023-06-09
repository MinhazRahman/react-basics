import BookShow from "./BookShow";

function BookList({ books, onDelete, onEdit }) {
  // list of rendered books
  const renderedBooks = books.map((book) => {
    return <BookShow onDelete={onDelete} onEdit={onEdit} key={book.id} book={book} />;
  });
  return <div className="book-list">{renderedBooks}</div>;
}

export default BookList;
