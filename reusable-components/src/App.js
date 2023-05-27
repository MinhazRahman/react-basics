import "bulma/css/bulma.css";
import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

// create App component
function App() {
  return (
    <div>
      <section class="hero is-info">
        <div class="hero-body">
          <p class="title">Daily Productivity Assistants</p>
        </div>
      </section>
      <div className="container is-fluid">
        <section className="section is-small">
          <div className="columns is-centered">
            <div className="column is-4">
              <ProfileCard
                title="Alexa"
                handle="@alexa2023"
                image={AlexaImage}
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            nec iaculis mauris."
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Cortana"
                handle="@cortana2023"
                image={CortanaImage}
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            nec iaculis mauris."
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Siri"
                handle="@siri2023"
                image={SiriImage}
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            nec iaculis mauris."
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
