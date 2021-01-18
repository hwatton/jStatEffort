import React from "react";
import "./styles.css";
import * as d3 from "d3";
import * as jstat from "jStat";

export default function App() {
  let rnd = Math.floor(Math.random() * 10);
  let num = d3.max([rnd, 5]);
  //jstat sum
  let arr = [2, 3, 4, 5, 6, 7, 6, 4, 3];
  let arrSum = jstat.sum(arr);
  //jstat map
  let jMap = jstat.map(arr, (x) => {
    return x * 3 + ", ";
  });
  //jstat rand
  let jRand = jstat.rand(3, 2);

  return (
    <div className="App">
      <h1>jStat Sum:{arrSum} </h1>
      <h1>d3 Num:{num}</h1>
      <h1>jStat Map:{jMap} </h1>
      <h1>jStat Rand:{jRand} </h1>
    </div>
  );
}
