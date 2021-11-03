import React, { Component } from "react";
import ThePainterPic from "../images/thepainter.png";

class ThePainterApp extends Component {
  render() {
    return (
      <div className="grouping-container the-painter-app">
        <div className="container heading-allbirds-homage">
          <div>
            <h3>Jose Tejada, The Painter</h3>
          </div>
          <div>
            <h4>Frontend App</h4>
          </div>
          <div>
            <p>React, HTML and SCSS</p>
          </div>
        </div>
        <div className="stacked-containers">
          <div className="container image-the-painter-app overlaid">
            <div>
              <img src={ThePainterPic} alt="the painter app"></img>
              <div className="image-overlay">
                <div className="overlay-text">VISIT SITE</div>
              </div>
            </div>
          </div>
          <div className="container description-the-painter-app">
            <div>
              <h5 className="background">Background</h5>
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
