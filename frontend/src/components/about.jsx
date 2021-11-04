import React, { Component } from "react";
import ZoomPic from "../images/zoom.png";
import SquarePic from "../images/square.png";

class About extends Component {
  render() {
    return (
      <section class="section-about">
        <div class="about-container content">
          <div>
            <h2>About Me</h2>
          </div>
          <div class="about-container-items">
            <div class="about-container-item">
              <p>
                After 5 years in medical accreditation and education I decided
                to take The Jump! My goal was to empower myself and be able to
                create technical solutions to real world challenges.
              </p>
            </div>
            <div class="about-container-item">
              <p>
                Passionate about child development, I recently completed the
                first iteration of my baby development app, Montessori by Month.
                I was proud to have completed my first design brief and
                collaborate with illustrator, Mamen Morrillas for my SVG app
                art. Working on Montessori by Month was a great opportunity for
                me to practice using React, MySQL, Node.js and CSS.
              </p>
            </div>
            <div class="about-container-item">
              <p>
                I'm actively seeking a developer role in London or remote and am
                excited about what lays ahead!
              </p>
            </div>
            <div class="about-container-item">
              <img src={ZoomPic} alt="zoom pic"></img>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
