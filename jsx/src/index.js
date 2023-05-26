// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom/client";

// Get a reference to the div with ID root
const divElement = document.getElementById("root");

// Tell React to take control of that element
const root = ReactDOM.createRoot(divElement);

// Create a component and component layout
function App() {
  // function name
  const name = "John Doe"; // variables

  return (
    // return statement
    <div>
      <h1>Hello From React Component!</h1>
      <h2>{name}</h2>
    </div>
  );
}

// Show the component on the screen
root.render(<App />); // pass React component as a jsx element
