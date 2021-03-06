import React, { Component } from "react";
import HackathonPic from "../images/hackathon.png";

class HackathonApp extends Component {
  render() {
    return (
      <div className="grouping-container hackthon-app">
        <div className="container heading">
          <div>
            <h3>Learn to Read with Russell</h3>
          </div>
          <div>
            <h4>Frontend (Hackathon) App</h4>
          </div>
          <div>
            <p>React, Redux, HTML and CSS</p>
          </div>
        </div>
        <div className="stacked-containers">
          <div className="container image-hackathon-app overlaid">
            <a href="https://learn-to-read.netlify.app/">
              <div>
                <img src={HackathonPic} alt="hackathon app"></img>
                <div className="image-overlay">
                  <div className="overlay-text">VISIT SITE</div>
                </div>
              </div>
            </a>
          </div>
          <div className="container description">
            <h5 className="background">Background</h5>
            <p>
              During my time at The Jump Digital School, I participated in a
              hackathon and collaborated with 5 developers to create a React app
              that helped children learn to read. We focused on phonetics and a
              simple layout that would be intuitive for any young child.
            </p>
          </div>
        </div>
        <a href="https://learn-to-read.netlify.app/">
          <div>
            <p className="call-to-action">Visit site</p>
          </div>
        </a>
      </div>
    );
  }
}

export default HackathonApp;
