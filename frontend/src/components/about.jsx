import React, { Component } from "react";

class About extends React.Component {
  render() {
    return (
      <section class="section-about">
        <div class="about-container content">
          <div>
            <h2>About Me</h2>
          </div>
          <div class="about-container-items">
            <div class="about-container-item">
              <h3>Just me</h3>
              <p>
                TLorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book
              </p>
            </div>
            <div class="about-container-item">
              <h3>Developer me</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
