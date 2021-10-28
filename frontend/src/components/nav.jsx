import React, { Component } from "react";

class Nav extends Component {
  render() {
    return (
      <section class="section-nav">
        <nav class="nav-container content">
          <div class="nav-logo">
            <a href="www.faithtejada.com">
              <span>faith-tejada</span>
            </a>
          </div>
          <div class="nav-menu">
            <div class="nav-menu-item">
              <a href="placeonpage">
                <span>Portfolio</span>
              </a>
            </div>
            <div class="nav-menu-item">
              <a href="placeonpage">
                <span>Skills</span>
              </a>
            </div>
            <div class="nav-menu-item">
              <a href="placeonpage">
                <span>About</span>
              </a>
            </div>
            <div class="nav-menu-item">
              <a href="placeonpage">
                <span>Contact</span>
              </a>
            </div>
            <div class="nav-menu-item">
              <a href="placeonpage">
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
