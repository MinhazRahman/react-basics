import "bulma/css/bulma.css";
import ShowImage from "./ShowImage";

function ImageList({ images }) {
  // a list of retrieved images
  const renderedImages = images.map((image) => {
    return <ShowImage key={image.id} image={image} />;
  });

  return <div className="columns is-multiline is-mobile">{renderedImages}</div>;
}

export default ImageList;
