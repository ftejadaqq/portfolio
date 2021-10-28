import React, { Component } from "react";
import HackathonPic from "../images/hackathon.png";

class HackathonApp extends React.Component {
  render() {
    return (
      <div className="grouping-container hackthon-app">
        <div className="container heading-hackathon-app">
          <div>
            <h3>Learn to Read with Russell</h3>
          </div>
          <div>
            <h4>Frontend App</h4>
          </div>
          <div>
            <p>Built using React, Redux, HTML and CSS</p>
          </div>
        </div>
        <div className="stackedContainers">
          <div className="container image-hackathon-app">
            <div>
              <img src={HackathonAppPic} alt="hackathon app"></img>
            </div>
          </div>
          <div className="container description-hackathon-app">
            <div>
              <p>
                During my time at The Jump Digital School, I participated in a
                hackathon and collaborated with 5 classmates to create a React
                app that helped children learn to read. We focused on phonetics
                and a simple layout that would be intuitive for any young child.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HackathonApp;
