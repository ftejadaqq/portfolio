import React, { Component } from "react";
import MontessoriAppPic from "../images/montessoribymonth.png";

class FeaturedApp extends React.Component {
  render() {
    return (
      <section className="section-featured-app">
        <div className="grouping-container featured-app">
          <div className="container heading-featured-app">
            <div>
              <h3>Montessori by Month</h3>
            </div>
            <div>
              <h4>Fullstack App</h4>
            </div>
            <div>
              <p>
                Built using React, Node.js, MySQL, Redux, HTML and CSS, with
                plans to deploy to the App Store using React Native
              </p>
            </div>
            <div>
              <p>
                Honourable mention: Vector Illustrations by Mamen Morrillas (an
                absolute pleasure to work with)
              </p>
            </div>
          </div>

          <div className="stackedContainers">
            <div className="container image-featured-app">
              <div>
                <img src={MontessoriAppPic} alt="montessori app"></img>
              </div>
            </div>
            <div className="container description-featured-app">
              <div>
                <p>
                  Knowing how to support your baby in development from day 1 can
                  be incredibly overwhelming with the plethora of information
                  out there. Inspired by the book 'Montessori from the Start' I
                  created a simple development timeline which shows how a baby
                  typically develops from 0-24 months, and included toy examples
                  that would be appropriate for each stage. Your baby's learning
                  is optimised and excess irrelevant toys are gone!
                </p>
              </div>
            </div>
          </div>

          <div className="container link-featured-app">
            <div>
              <p>See my Figma design</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default FeaturedApp;
