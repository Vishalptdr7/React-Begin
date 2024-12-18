import React from "react";
import ReactDOM from "react-dom/client";








const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "Jai Shree Ram")
  )
);
console.log(parent);
const root1 = ReactDOM.createRoot(document.getElementById("js"));
root1.render(parent);

const parent1 = React.createElement(
  "div",
  { id: "parent1" },
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { key: "mahakal" }, "Jai Shree Mahakal"),
    React.createElement("h2", { key: "shyam" }, "Jai Shree Shyam"),
  ])
);

const root2 = ReactDOM.createRoot(document.getElementById("js1"));
root2.render(parent1);
console.log(parent1);

const jsxheading = (<h1 id="head">
  Hello World from React with JSX 
  </h1>);

const root=ReactDOM.createRoot(document.getElementById("js"))
root.render(jsxheading)
console.log(jsxheading)


const name=(<h1 className="name">
  Vishal Patidar
  </h1>);
const rootname=ReactDOM.createRoot(document.getElementById("center"));
rootname.render(name);


// react component->

const HelloWorld = () => {
  return (
    <div>
      <h1>Hello, World!</h1>
    </div>
  );
};

const roothello = ReactDOM.createRoot(document.getElementById("hello"));

roothello.render(<HelloWorld />);


const Firstcompo=()=>(
  <div>
    <h1>This is a first component</h1>
  </div>

);
const Secondcompo = () => (
  <div>
    <Firstcompo />
    <h1>This is a second component</h1>
  </div>
);

const rootsecond = ReactDOM.createRoot(document.getElementById("second"));

rootsecond.render(<Secondcompo />);




//// Create a element and put inside the component
const ele=(
  <div>
    <h1>This is a Element </h1>
    <p>This is a paragraph</p>
  </div>
);
const Thirdcompo=()=>(
  <div>
    {ele}
    <h1>This is a third component</h1>
  </div>
);
const rootThird=ReactDOM.createRoot(document.getElementById("eleInsideCompo"));

rootThird.render(<Thirdcompo />);