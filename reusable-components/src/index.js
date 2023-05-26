import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";

// find the root element
const divElement = document.getElementById("root");

// tell React to take control of the element
const root = ReactDom.createRoot(divElement);

// show the element on the web page
root.render(<App />);
