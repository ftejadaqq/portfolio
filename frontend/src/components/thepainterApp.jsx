import React, { Component } from "react";
import ThePainterPic from "../images/thepainter.png";

class ThePainterApp extends React.Component {
  render() {
    return (
      <div className="grouping-container the-painter-app">
        <div className="stackedContainers">
          <div className="container image-the-painter-app">
            <div>
              <img src={ThePainterAppPic} alt="the painter app"></img>
            </div>
          </div>
          <div className="container description-the-painter-app">
            <div>
              <h3>Jose Tejada, The Painter</h3>
            </div>
            <div>
              <p>
                Real world website for my father's artwork using React, SCSS,
                Flexbox and Grid. It has been a long time dream of his to
                finally show his creations to the world. I'm so proud of him and
                I was delighted to be able to help.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ThePainterApp;
