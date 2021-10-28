import React, { Component } from "react";
import JohnogroatsPic from "../images/johnogroats.png";

class Johnogroats extends React.Component {
  render() {
    return (
      <div className="grouping-container johnogroats">
        <div className="stackedContainers">
          <div className="container image-johnogroats">
            <div>
              <img src={JohnogroatsPic} alt="John O' Groats SVG"></img>
            </div>
          </div>
          <div className="container description-johnogroats">
            <div>
              <h3>John O' Groats</h3>
            </div>
            <div>
              <p>
                After a trip far North to John O' Groats I was inspired to
                create a SVG of my favorite snapshop and practice some css
                animation.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Johnogroats;
