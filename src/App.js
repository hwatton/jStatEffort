import React from "react";
import "./styles.css";
import * as d3 from "d3";
import * as jstat from "jstat";
import Circles from "./circles.jsx";
import Line from "./d3Line.jsx";

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
  let copy = jRand;

  let order = jRand[0].sort(function (a, b) {
    return a - b;
  });

  let pathArr = [];
  let pathTwo = [];

  let pathTwoTwo = [];

  let yScale = d3.scaleLinear().domain([0, 1]).range([0, 200]);

  order.forEach(function (element, i) {
    pathArr.push({ x: i, y: yScale(element) });
  });
  pathArr.push({ x: 600, y: yScale(0) });
  copy[0].forEach(function (element, i) {
    pathTwo.push({ x: i, y: yScale(element) });
  });
  pathTwo.push({ x: 600, y: yScale(0) });

  pathTwoTwo.push({ x: 0, y: yScale(0) });
  copy[0].forEach(function (element, i) {
    pathTwoTwo.push({ x: i, y: yScale(Math.random()) });
  });

  pathTwoTwo.push({ x: 600, y: yScale(0) });

  let circleData = [];
  for (let i = 0; i < 10; i++) {
    let num = Math.random() * 10 + 20;
    circleData.push({ rndNum: num });
  }

  return (
    <div className="App">
      <h1>jStat Sum:{arrSum} </h1>
      <h1>d3 Num:{num}</h1>
      <h1>jStat Map:{jMap} </h1>
      <h1>jStat Rand:{jRand} </h1>
      <Line data={pathArr} width="500" height="200" id="lineThing" />
      <Line data={pathTwo} width="500" height="200" id="lineThingTwo" />
      <Line data={pathTwoTwo} width="500" height="200" id="lineThingTwo" />
      <Circles data={circleData} width="500" height="200" />
    </div>
  );
}
