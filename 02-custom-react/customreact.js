const mainContainer = document.getElementById("root");

function customRender(reactElement, container) {
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  const propArray = Object.entries(reactElement.props);
  propArray.forEach((props) => {
    domElement.setAttribute(props[0], props[1]);
  });
  console.log(domElement);
  container.appendChild(domElement);
}

const reactElement1 = {
  type: "a",
  props: {
    href: "https://www.google.com",
    target: "_blank",
  },
  children: "Click me to visit Google",
};
const reactElement2 = {
  type: "p",
  props: {},
  children: "Hi this is a Paragraph!",
};

customRender(reactElement1, mainContainer);
customRender(reactElement2, mainContainer);
