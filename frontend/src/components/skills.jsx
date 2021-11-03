import React, { Component } from "react";

class Skills extends Component {
  render() {
    return (
      <section class="section-skills">
        <div class="skills-container content">
          <div className="skills-heading">
            <h2>My Skills</h2>
            <p>
              Here's a snapshot of what I can do. I'm always open to learning
              new languages and once I've mastered them, always happy to help
              fellow colleagues.
            </p>
          </div>
          <div class="skills-container-items">
            <div>
              <h5>FRONTEND DEV</h5>
              <p>
                <b>CSS, HTML5, Javascript, React, SCSS and FIGMA.</b> Build
                responsive client-side applications with consistent semantics.
                Appreciate the power of design and enjoy creating user centered
                sites. Enjoy using React and focusing on efficient code using
                Redux.
              </p>
            </div>
            <div>
              <h5>BACKEND DEV</h5>
              <p>
                <b>
                  CPanel, API Integration, MySQL, MongoDB, Node.js and Python.
                </b>{" "}
                Love using MySQL and other querying languages. Comfortable with
                Node.js and implementing backend functionality. Maintain
                self-written getting started guides with best practices for my
                personal reference.
              </p>
            </div>
            <div>
              <h5>PROJECT COORDINATION</h5>
              <p>
                Extensive experience in project coordination at medical
                regulatory bodies. Competent in project management practices and
                using platforms such as Trello. Created training programme for
                last position and successfully virtually trained new starter
                during the pandemic.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;
