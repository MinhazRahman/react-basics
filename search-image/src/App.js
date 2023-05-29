import "bulma/css/bulma.css";
import { useState } from "react";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import searchImages from "./API";

function App() {
  // create a piece of state named "images" with default value as an empty array
  const [images, setImages] = useState([]);

  const handleSubmit = async (param) => {
    const results = await searchImages(param);

    // update the state "images"
    setImages(results);
  };
  return (
    <div>
      <section className="hero is-info">
        <div className="hero-body">
          <p className="title">Image Gallery</p>
        </div>
      </section>
      <SearchBar onSubmit={handleSubmit} />

      <ImageList images={images} />
    </div>
  );
}

export default App;
