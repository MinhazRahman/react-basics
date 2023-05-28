import "./css/Fruit.css";
import { useState } from "react";
import apple from "./images/apple.svg";
import berry from "./images/berry.svg";
import grape from "./images/grape.svg";
import mango from "./images/mango.svg";
import orange from "./images/orange.svg";
import pineapple from "./images/pineapple.svg";
import heart from "./images/heart.svg";

const imageMap = {
  apple,
  berry,
  grape,
  mango,
  orange,
  pineapple,
};

function Fruit({ type }) {
  const [clicks, setClicks] = useState(0);
  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <div className="fruit-display" onClick={handleClick}>
      <img className="fruit" alt="fruit" src={imageMap[type]} />
      <img
        className="heart"
        alt="heart"
        src={heart}
        style={{ width: 10 + clicks * 10 + "px" }}
      />
    </div>
  );
}

export default Fruit;
