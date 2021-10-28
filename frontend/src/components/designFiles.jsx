import React, { Component } from "react";
import ClipboardPic from "../images/clipboard.jpg";

class DesignFiles extends React.Component {
  render() {
    return (
      <div className="grouping-container design-file">
        <div className="stackedContainers">
          <div className="container image-design-file">
            <div>
              <img src={ClipboardPic} alt="clipboard landing page"></img>
            </div>
          </div>
          <div className="container description-design-file">
            <div>
              <h3>Clipboard Landing Page</h3>
            </div>
            <div>
              <p>Responsive design recreated from Figma design files</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DesignFiles;
