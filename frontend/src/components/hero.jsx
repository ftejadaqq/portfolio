import React, { Component } from "react";
import Portrait from "../images/portrait.png";

class Hero extends Component {
  render() {
    return (
      <section class="section-hero">
        <div class="hero-container content">
          <div class="hero-container-item hero-pic">
            <img src={Portrait} alt="portrait"></img>
          </div>
          <div class="hero-container-item hero-text">
            <h1>Hello, I'm Faith</h1>
            <p className="hero-text-description">
              I'm a London-based <b>fullstack developer</b>. I combine
              <b> modern </b> software engineering skills with the{" "}
              <b> communication </b>
              skills of a teacher and <b>organization</b> of a project manager.
            </p>
            <a href="#featured">
              <p id="work" className="hero-container-link">
                Check out my featured app!
              </p>
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
