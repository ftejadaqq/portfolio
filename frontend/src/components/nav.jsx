import React, { Component } from "react";

class Nav extends Component {
  render() {
    return (
      <section class="section-nav">
        <nav class="nav-container content">
          <div class="nav-logo">
            <a href="https://www.faithtejada.com">
              <span>{`{FT}`}</span>
            </a>
          </div>
          <div class="nav-menu">
            <div class="nav-menu-item">
              <a href="#work">
                <span>Work</span>
              </a>
            </div>
            <div class="nav-menu-item">
              <a href="#skills">
                <span>Skills</span>
              </a>
            </div>
            <div class="nav-menu-item">
              <a href="#about">
                <span>About</span>
              </a>
            </div>
            <div class="nav-menu-item">
              <a href="#contact">
                <span>Contact</span>
              </a>
            </div>
            <div class="nav-menu-item">
              <a href="https://drive.google.com/file/d/1eHh9dQVhFNrShjBEqYEObaC8QkmTV4ym/view?usp=sharing">
                <span>CV</span>
              </a>
            </div>
          </div>
        </nav>
      </section>
    );
  }
}

export default Nav;
