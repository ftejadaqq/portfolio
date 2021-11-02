import React, { Component } from "react";
import JohnogroatsPic from "../images/johnogroats.png";
import JohnogroatsOriginal from "../images/johnogroatspic.jpg";

class Johnogroats extends Component {
  render() {
    return (
      <div className="grouping-container johnogroats">
        <div className="container heading-johnogroats">
          <div>
            <h3>John O' Groats</h3>
          </div>
          <div>
            <h4>Scalable Vector Graphic</h4>
          </div>
          <div>
            <p>SVG and CSS Animation</p>
          </div>
        </div>
        <div className="stacked-containers">
          <div className="container image-johnogroats">
            <img src={JohnogroatsPic} alt="John O' Groats SVG"></img>
          </div>
          <div className="container photo-johnogroats">
            <img src={JohnogroatsOriginal} alt="holidayphoto"></img>
          </div>
        </div>
      </div>
    );
  }
}

export default Johnogroats;
