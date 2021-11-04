import React, { Component } from "react";
import JohnogroatsPic from "../images/johnogroats.png";
import JohnogroatsOriginal from "../images/johnogroatspic.jpg";

class Johnogroats extends Component {
  render() {
    return (
      <div className="grouping-container johnogroats">
        <div className="container heading">
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
          <div className="container image-johnogroats overlaid">
            <img src={JohnogroatsPic} alt="John O' Groats SVG"></img>
            <a href="https://johnogroats.netlify.app/">
              <div className="image-overlay">
                <div className="overlay-text">VISIT SITE</div>
              </div>
            </a>
          </div>
          <div className="container photo-johnogroats">
            <img id="skills" src={JohnogroatsOriginal} alt="holidayphoto"></img>
          </div>
        </div>
      </div>
    );
  }
}

export default Johnogroats;
