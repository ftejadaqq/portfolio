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
              I'm a London-based full-stack junior developer. I combine modern
              software engineering skills with the communication skills of a
              language teacher.
            </p>
            <p className="hero-container-link">Check out my featured app!</p>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
