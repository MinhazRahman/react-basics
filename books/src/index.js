import "./css/index.css";
import React from "react";
import ReactDom from "react-dom/client";
import { Provider } from "./context/books";
import App from "./App";

const element = document.getElementById("root");
const root = ReactDom.createRoot(element);

root.render(
  <Provider>
    <App />
  </Provider>
);
