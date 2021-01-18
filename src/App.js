import React from "react";
import "./styles.css";
import * as d3 from "d3";

export default function App() {
  let rnd = Math.floor(Math.random() * 10);

  let num = d3.max([rnd, 5]);

  return (
    <div className="App">
      <h1>Hello CodeSandbox {num}</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
