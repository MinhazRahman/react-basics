// create component
// using destructuring syntax
function ProfileCard({ title, handle }) {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{handle}</h2>
    </div>
  );
}

// export the component
export default ProfileCard;
