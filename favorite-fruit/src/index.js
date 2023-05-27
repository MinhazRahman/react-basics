import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// find the root element
const element = document.getElementById("root");
// tell react to take control of the root element
const root = ReactDOM.createRoot(element);

// show the App component on the screen
root.render(<App />);
