import ProfileCard from "./ProfileCard";

// create App component
function App() {
  return (
    <div>
      <div>Daily Digital Assistants</div>
      <ProfileCard title="Siri" handle="@siri2023" />
      <ProfileCard title="Cortana" handle="@cortana2023" />
      <ProfileCard title="Google Talk" handle="@gtalk2023" />
    </div>
  );
}

export default App;
