import React, { Component } from "react";
import ClipboardPic from "../images/clipboard.jpg";
import FourcardPic from "../images/fourcard.jpg";

class DesignFiles extends Component {
  render() {
    return (
      <div className="grouping-container design-file">
        <div className="container heading">
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
          <div>
            <div className="container image-design-file overlaid">
              <div className="clipboard">
                <img src={ClipboardPic} alt="clipboard landing page"></img>
                <a href="https://clipboarddesign.netlify.app/">
                  <div className="image-overlay">
                    <div className="overlay-text">VISIT SITE</div>
                  </div>
                </a>
              </div>
            </div>
            <a href="https://clipboarddesign.netlify.app/">
              <div className="clipboard-cta">
                <p className="call-to-action">Visit clipboard</p>
              </div>
            </a>
          </div>
          <div>
            <div className="container image-design-file overlaid">
              <div className="fourcard">
                <img src={FourcardPic} alt="four card design"></img>
                <a href="https://fourcarddesign.netlify.app/">
                  <div className="image-overlay">
                    <div className="overlay-text">VISIT SITE</div>
                  </div>
                </a>
              </div>
            </div>
            <a href="https://fourcarddesign.netlify.app/">
              <div className="design-file-image">
                <p className="call-to-action">Visit four card</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default DesignFiles;
