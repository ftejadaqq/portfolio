import React, { Component } from "react";
import LinkedinIcon from "../images/linkedin.svg";
import GithubIcon from "../images/github.svg";
import CodepenIcon from "../images/codepen.svg";

class Contact extends Component {
  render() {
    return (
      <section class="section-contact">
        <div class="contact-container content">
          <h2>Get In Touch</h2>
          <p>I'm actively seeking a junior developer role</p>
          <p>ftejadaq7@gmail.com</p>
          <div class="contact-container-icons">
            <div className="contact-container-icon">
              <img src={GithubIcon} alt="github logo"></img>
            </div>
            <div className="contact-container-icon">
              <img src={LinkedinIcon} alt="linkedin logo"></img>
            </div>
            <div className="contact-container-icon">
              <img src={CodepenIcon} alt="codepen logo"></img>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
