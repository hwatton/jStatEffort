import React from "react";
import "./styles.css";
import * as d3 from "d3";
import * as jstat from "jstat";
import lineFunc from "./functions.js";

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
  let jRand = jstat.rand(1, 600);

  let order = jRand[0].sort(function (a, b) {
    return a - b;
  });

  let pathArr = [];

  let yScale = d3.scaleLinear().domain([0, 1]).range([0, 200]);

  order.forEach(function (element, i) {
    pathArr.push({ x: i, y: yScale(element) });
  });

  let path = lineFunc(pathArr);

  return (
    <div className="App">
      <h1>jStat Sum:{arrSum} </h1>
      <h1>d3 Num:{num}</h1>
      <h1>jStat Map:{jMap} </h1>
      <h1>jStat Rand:{jRand} </h1>
      <svg>
        <path d={path} id="pathLine" />
      </svg>
      <svg>
        <circles data={path} id="circles" />
      </svg>
    </div>
  );
}
