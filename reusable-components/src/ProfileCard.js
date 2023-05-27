// create component
// using destructuring syntax
function ProfileCard({ title, handle, image, description }) {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-1by1">
          <img src={image} alt="dpa logo" />
        </figure>
      </div>
      <div class="card-content">
        <div class="media-content">
          <p class="title is-4">{title}</p>
          <p class="subtitle is-6">{handle}</p>
        </div>
        <div class="content">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

// export the component
export default ProfileCard;
