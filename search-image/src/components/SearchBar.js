import { useState } from "react";

function SearchBar({ onSubmit }) {
  // create a piece of state "param" and set the default value to empty string
  const [param, setParam] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(param);
  };
  const handleChange = (event) => {
    setParam(event.target.value);
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input value={param} onChange={handleChange} />
      </form>
    </div>
  );
}

export default SearchBar;
