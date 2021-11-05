import React, { Component } from "react";
import AllbirdsPic from "../images/allbirds.jpg";

class AllbirdsHomage extends Component {
  render() {
    return (
      <div className="grouping-container allbirds-homage">
        <div className="container heading">
          <div>
            <h3>Allbirds Replica</h3>
          </div>
          <div>
            <h4>Web Page Recreation</h4>
          </div>
          <div>
            <p>HTML and CSS</p>
          </div>
        </div>
        <div className="stacked-containers">
          <div className="container image-allbirds-homage overlaid">
            <img src={AllbirdsPic} alt="allbirds homage"></img>
            <a href="https://allbirdsreplica.netlify.app/">
              <div className="image-overlay">
                <div className="overlay-text">VISIT SITE</div>
              </div>
            </a>
          </div>

          <div className="container description">
            <h5 className="background">Background</h5>
            <div>
              <p>
                I love Allbirds shoes and am drawn to the minimal and earthy
                feel of their website. Some of the highlights in recreating
                their homepage were practicising flexbox and responsive
                rendering, and learning to be my own project manager by breaking
                the project up into sensible bits - because nothing can be
                solved monolithically.
              </p>
            </div>
          </div>
        </div>
        <a href="https://allbirdsreplica.netlify.app/">
          <div>
            <p className="call-to-action">Visit site</p>
          </div>
        </a>
      </div>
    );
  }
}

export default AllbirdsHomage;
