import React, { Component } from "react";

class Hero extends React.Component {
  render() {
    return (
      <section class="section-hero">
        <div class="hero-container content">
          <div class="hero-container-item hero-pic">
            <img src="./images/portrait.jpg" alt="portrait"></img>
          </div>
          <div class="hero-container-item hero-text">
            <h1>Hello, I'm Faith Tejada</h1>
            <p>
              I'm a London-based full-stack junior developer. I combine modern
              software engineering skills with the communication skills of a
              language teacher.
            </p>
            <p>Check out my featured app!</p>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
