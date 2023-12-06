import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(1);
  function increaseValue() {
    if (counter < 10) setCounter((count) => count + 1);
  }
  function decreaseValue() {
    if (counter >= 1) setCounter((count) => count - 1);
  }
  return (
    <>
      <button onClick={decreaseValue}>Decrease value</button>
      <h1>Counter value : {counter}</h1>
      <button onClick={increaseValue}>Increase value</button>
    </>
  );
}

export default App;
