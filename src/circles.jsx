import React from "react";
import * as d3 from "d3";

class Circles extends React.Component {
  drawCircles() {
    let wd = parseInt(this.props.width, 10);
    let ht = parseInt(this.props.height, 10);
    let arrayToReturn = [];
    let keyNum = 0;

    this.props.data.forEach((element) => {
      arrayToReturn.push(
        <circle
          key={"key_" + keyNum}
          cx={Math.random() * wd}
          cy={Math.random() * ht}
          r={element.rndNum}
          fill={d3.interpolateRainbow(Math.random())}
        ></circle>
      );
      keyNum++;
    });
    //console.log(this.props.data);
    return arrayToReturn;
    //return <path className="line" d={line(this.props.data)} />;
  }

  render() {
    return (
      <svg
        className="line-container"
        width={this.props.width}
        height={this.props.height}
      >
        {this.drawCircles()}
      </svg>
    );
  }
}

export default Circles;
