import * as d3 from "d3";

function lineFunc(objArr) {
  let path = d3
    .line()
    .x((d) => d.x)
    .y((d) => d.y);

  return path(objArr);
}

export default lineFunc;
