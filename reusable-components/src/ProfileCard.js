// create component
// using destructuring syntax
function ProfileCard({ title, handle, image }) {
  return (
    <div>
      <img src={image} alt="dpa logo" />
      <h1>{title}</h1>
      <h2>{handle}</h2>
    </div>
  );
}

// export the component
export default ProfileCard;
