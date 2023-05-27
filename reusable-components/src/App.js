import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

// create App component
function App() {
  return (
    <div>
      <div>Daily Productivity Assistants</div>
      <ProfileCard title="Alexa" handle="@alexa2023" image={AlexaImage} />
      <ProfileCard title="Cortana" handle="@cortana2023" image={CortanaImage} />
      <ProfileCard title="Siri" handle="@siri2023" image={SiriImage} />
    </div>
  );
}

export default App;
