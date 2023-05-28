import "./css/App.css";
import { useState } from "react";
import Fruit from "./Fruit";

function getRandomFruit() {
  const fruits = ["apple", "grape", "berry", "mango", "pineapple", "orange"];
  return fruits[Math.floor(Math.random() * fruits.length)];
}

function App() {
  const [fruits, setFruits] = useState([]);

  const handleClick = () => {
    setFruits([...fruits, getRandomFruit()]);
  };
  const renderedFruits = fruits.map((fruit, index) => {
    return <Fruit type={fruit} key={index} />;
  });
  return (
    <div className="app">
      <button onClick={handleClick}>Add Fruit</button>
      <div className="fruit-list">{renderedFruits}</div>
    </div>
  );
}

export default App;
