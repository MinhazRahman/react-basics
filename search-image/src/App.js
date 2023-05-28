import SearchBar from "./components/SearchBar";

function App() {
  const handleSubmit = (param) => {
    console.log("Search for: ", param);
  };
  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
