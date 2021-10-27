import React, { Component } from "react";
import MontessoriApp from "../images/montessoribymonth.png";

class FeaturedApp extends React.Component {
  render() {
    return (
      <section className="section-featured-app">
        <div className="featured-app container">
          <div className="featured-app-item">
            <h3>Montessori by Month</h3>
            <h4>Fullstack App</h4>
            <p>
              Built using React, Node.js, MySQL, Redux, HTML and CSS, with plans
              to deploy to the App Store using React Native
            </p>
            <p>
              Honourable mention: Vector Illustrations by Mamen Morrillas (an
              absolute pleasure to work with)
            </p>
          </div>

          <div className="featured-app-item">
            <div>
              <img src={MontessoriApp} alt="montessori app"></img>
            </div>
            <div>
              <p>
                Knowing how to support your baby in development from day 1 can
                be incredibly overwhelming with the plethora of information out
                there. Inspired by the book 'Montessori from the Start' I
                created a simple development timeline which shows how a baby
                typically develops from 0-24 months, and included toy examples
                that would be appropriate for each stage. Your baby's learning
                is optimised and excess irrelevant toys are gone!
              </p>
            </div>
          </div>
          <div className="featured-app-item">
            <p>See my Figma design</p>
          </div>
        </div>
      </section>
    );
  }
}

export default FeaturedApp;
