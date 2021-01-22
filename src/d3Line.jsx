import React from "react";
import * as d3 from "d3";

class Line extends React.Component {
  drawLine() {
    let wd = parseInt(this.props.width, 10);
    let ht = parseInt(this.props.height, 10);

    let xScale = d3
      .scaleTime()
      .domain(
        d3.extent(this.props.data, (d) => {
          return d.x;
        })
      )
      .range([0, wd]);

    let yScale = d3
      .scaleLinear()
      .domain(
        d3.extent(this.props.data, (d) => {
          return d.y;
        })
      )
      .range([ht, 0]);

    let line = d3
      .line()
      .x((d) => xScale(d.x))
      .y((d) => yScale(d.y));

    //console.log(line(this.props.data));
    return <path className="line" d={line(this.props.data)} />;
  }

  render() {
    return (
      <svg
        className="line-container"
        width={this.props.width}
        height={this.props.height}
      >
        {this.drawLine()}
      </svg>
    );
  }
}

export default Line;
