import { useState } from "react";

function BookEdit({ book, onSubmit }) {
  const [title, setTile] = useState(book.title);
  const handleChange = (event) => {
    setTile(event.target.value);
  };

  // on handle submit update the title of the book
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(book.id, title);
  };

  return (
    <div>
      <form className="book-edit" onSubmit={handleSubmit}>
        <label>Update Title</label>
        <input className="input" value={title} onChange={handleChange}></input>
        <button className="button is-primary">Save</button>
      </form>
    </div>
  );
}

export default BookEdit;
