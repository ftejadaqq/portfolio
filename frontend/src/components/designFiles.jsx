import React, { Component } from "react";
import ClipboardPic from "../images/clipboard.jpg";
import FourcardPic from "../images/fourcard.jpg";

class DesignFiles extends Component {
  render() {
    return (
      <div className="grouping-container design-file">
        <div className="container heading-design-file">
          <div>
            <h3>Clipboard Page and Four Card Designs</h3>
          </div>
          <div>
            <h4>Figma design file recreations</h4>
          </div>
          <div>
            <p>HTML and Responsive CSS</p>
          </div>
        </div>
        <div className="stacked-containers">
          <div className="container image-design-file">
            <div className="clipboard">
              <img src={ClipboardPic} alt="clipboard landing page"></img>
            </div>
          </div>
          <div className="container image-design-file">
            <div>
              <img src={FourcardPic} alt="four card design"></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DesignFiles;
