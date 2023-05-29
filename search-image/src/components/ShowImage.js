import "bulma/css/bulma.css";

function ShowImage({ image }) {
  return (
    <div class="column is-4">
      <div className="card">
        <div className="card-image">
          <figure className="image is-1by1">
            <img src={image.urls.small} alt={image.alt_description} />
          </figure>
        </div>
        <div className="card-content">
          <div className="media-content">
            <p className="title is-4">{image.alt_description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowImage;
