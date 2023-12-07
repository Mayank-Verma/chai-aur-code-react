import "./App.css";
import { useState } from "react";

export default function App() {
  const [bg, setBg] = useState("white");
  function handleBgChange(e) {
    console.log(e.target.value);
    setBg(e.target.value);
  }
  return (
    <div className="container" style={{ backgroundColor: bg }}>
      <div className="navbar">
        <button
          className="btn"
          value="red"
          style={{ backgroundColor: "red", color: "white" }}
          onClick={handleBgChange}
        >
          Red
        </button>
        <button
          className="btn"
          value="green"
          style={{ backgroundColor: "green", color: "white" }}
          onClick={handleBgChange}
        >
          Green
        </button>
        <button
          className="btn"
          value="blue"
          style={{ backgroundColor: "blue", color: "white" }}
          onClick={handleBgChange}
        >
          Blue
        </button>
        <button
          className="btn"
          value="olive"
          style={{ backgroundColor: "olive", color: "white" }}
          onClick={handleBgChange}
        >
          Olive
        </button>
        <button
          className="btn"
          value="gray"
          style={{ backgroundColor: "gray", color: "white" }}
          onClick={handleBgChange}
        >
          Gray
        </button>
        <button
          className="btn"
          value="yellow"
          style={{ backgroundColor: "yellow" }}
          onClick={handleBgChange}
        >
          Yellow
        </button>
        <button
          className="btn"
          value="pink"
          style={{ backgroundColor: "pink" }}
          onClick={handleBgChange}
        >
          Pink
        </button>
        <button
          className="btn"
          value="purple"
          style={{ backgroundColor: "purple", color: "white" }}
          onClick={handleBgChange}
        >
          Purple
        </button>
        <button
          className="btn"
          value="lavender"
          style={{ backgroundColor: "lavender" }}
          onClick={handleBgChange}
        >
          Lavender
        </button>
        <button
          className="btn"
          value="white"
          style={{ backgroundColor: "white" }}
          onClick={handleBgChange}
        >
          White
        </button>
        <button
          className="btn"
          value="black"
          style={{ backgroundColor: "black", color: "white" }}
          onClick={handleBgChange}
        >
          Black
        </button>
      </div>
    </div>
  );
}
