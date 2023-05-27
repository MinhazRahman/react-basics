import { useState } from "react";

function App() {
    const [count, setCount] = useState(0);

  const handleClick = () => {
      setCount(count + 1);
  };
  return (
    <div>
          <button onClick={handleClick}>Add Fruit</button>
          <div>Number of Fruits: { count}</div>
    </div>
  );
}

export default App;
