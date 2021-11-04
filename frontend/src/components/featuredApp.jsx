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
            {/* <div>
              <p>
                Honourable mention: Vector Illustrations by Mamen Morrillas (an
                absolute pleasure to work with)
              </p>
            </div> */}
          </div>

          <div className="stacked-containers">
            <div className="container image-featured-app overlaid">
              <div>
                <img src={MontessoriAppPic} alt="montessori app"></img>
                <div className="image-overlay">
                  <div className="overlay-text">VISIT SITE</div>
                </div>
              </div>
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
              </div>
            </div>
          </div>

          <div className="container link-featured-app">
            <div>
              <svg className="figma" viewBox="0 0 38 57" class="figma-1p2i2oq">
                <path
                  fill="#1abcfe"
                  d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z"
                ></path>
                <path
                  fill="#0acf83"
                  d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z"
                ></path>
                <path
                  fill="#ff7262"
                  d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z"
                ></path>
                <path
                  fill="#f24e1e"
                  d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z"
                ></path>
                <path
                  fill="#a259ff"
                  d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default FeaturedApp;
