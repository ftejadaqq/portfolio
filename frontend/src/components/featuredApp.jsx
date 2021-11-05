import React, { Component } from "react";
import MontessoriAppPic from "../images/montessoribymonth.png";

class FeaturedApp extends Component {
  render() {
    return (
      <section id="featured" className="section-featured-app">
        <div className="grouping-container featured-app">
          <div className="container heading">
            <div>
              <h3>Montessori by Month</h3>
            </div>
            <div>
              <h4>Fullstack App</h4>
            </div>
            <div>
              <p>
                React, Node.js, MySQL, Redux, HTML and CSS, with plans to deploy
                to the App Store using React Native
              </p>
            </div>
          </div>

          <div className="stacked-containers">
            <div className="container image-featured-app overlaid">
              <a href="https://www.montessoribymonth.com">
                <div>
                  <img src={MontessoriAppPic} alt="montessori app"></img>
                  <div className="image-overlay">
                    <div className="overlay-text">VISIT SITE</div>
                  </div>
                </div>
              </a>
            </div>
            <div className="container description">
              <div>
                <h5 className="background">Background</h5>
                <p>
                  Inspired by the book 'Montessori from the Start' I created a
                  simple development timeline which shows how a baby typically
                  develops from 0-24 months, including stage-based toy
                  recommendations. You can share the timeline with all your
                  loved ones and avoid excess irrelevant toys.
                </p>
                <a href="https://www.figma.com/file/j1dFMsRwz5vMQpZnuoNAML/montessoribymonth-draft?node-id=0%3A1">
                  <p className="see-figma">
                    See my <b>Figma design</b>.
                  </p>
                </a>
              </div>
            </div>
          </div>
          <a href="https://www.montessoribymonth.com">
            <div>
              <p className="call-to-action">Visit site</p>
            </div>
          </a>
        </div>
      </section>
    );
  }
}

export default FeaturedApp;
