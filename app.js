import React from "react";
import ReactDOM from "react-dom/client";








// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", {}, "Jai Shree Ram")
//   )
// );
// console.log(parent);
// const root1 = ReactDOM.createRoot(document.getElementById("js"));
// root1.render(parent);

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


