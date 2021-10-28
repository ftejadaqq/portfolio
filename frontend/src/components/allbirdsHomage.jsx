import React, { Component } from "react";
import AllbirdsPic from "../images/allbirds.jpg";

class AllbirdsHomage extends Component {
  render() {
    return (
      <div className="grouping-container allbirds-homage">
        <div className="container heading-allbirds-homage">
          <div>
            <h3>Allbirds Replica</h3>
          </div>
        </div>
        <div className="stacked-containers">
          <div className="container image-allbirds-homage">
            <div>
              <img src={AllbirdsPic} alt="allbirds homage"></img>
            </div>
          </div>
          <div className="container description-allbirds-homage">
            <div>
              <p>
                I love Allbirds shoes and am drawn to the minimal and earthy
                feel of their website. This was a recreation of their home page.
                Some of the highlights were practicising flexbox and responsive
                rendering, and learning to be my own project manager by breaking
                the project up into sensbile bits - because nothing can be
                solved monolithically.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AllbirdsHomage;
