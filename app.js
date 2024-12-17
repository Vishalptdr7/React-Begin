import React from "react";
import ReactDOM from "react-dom/client";




const to = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from react"
);

console.log(to);

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "Jai Shree Ram")
  )
);
const root1 = ReactDOM.createRoot(document.getElementById("js"));
root1.render(parent);

const parent1 = React.createElement(
  "div",
  { id: "parent1" },
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "Jai Shree Mahakal"),
    React.createElement("h2", {}, "Jai Shree Shyam"),
  ])
);
const root2 = ReactDOM.createRoot(document.getElementById("js1"));
root2.render(parent1);
