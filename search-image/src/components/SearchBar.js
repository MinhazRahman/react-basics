function SearchBar({ onSubmit }) {
  const handleClick = () => {
    onSubmit("Cars");
  };
  return (
    <div>
      <input />
      <button onClick={handleClick}>Search</button>
    </div>
  );
}

export default SearchBar;
