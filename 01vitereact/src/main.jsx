import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Chai from "./Chai.jsx";

const reactElement = React.createElement(
  "a",
  {
    href: "http://youtube.com",
    target: "_blank",
  },
  "Visit Google"
);

ReactDOM.createRoot(document.getElementById("root")).render(reactElement);
