import React, { Component } from "react";
import LinkedinIcon from "../images/linkedinFixed.svg";
import EmailIcon from "../images/sendFixed.svg";
import GithubIcon from "../images/githubFixed.svg";
// import SendFixedIcon from "../images/sendFixed.svg";
// import GithubFixedIcon from "../images/githubFixed.svg";
// import LinkedinFixedIcon from "../images/linkedinFixed.svg";

class Contact extends Component {
  render() {
    return (
      <section id="contact" class="section-contact">
        <div class="contact-container content">
          <h2>Get In Touch</h2>
          <p>
            I'm actively seeking a junior developer role. Please feel free to
            reach out.
          </p>
          <a href="mailto:ftejadaq7@gmail.com">
            <p className="email">ftejadaq7@gmail.com</p>
          </a>
          <div class="contact-container-icons">
            <div className="contact-container-icon">
              <a href="https://github.com/ftejadaqq">
                <img src={GithubIcon} alt="github logo"></img>
              </a>
            </div>
            <div className="contact-container-icon">
              <a href="mailto:ftejadaq7@gmail.com">
                <img src={EmailIcon} alt="email logo"></img>
              </a>
            </div>
            <div className="contact-container-icon">
              <a href="https://www.linkedin.com/in/faithtejada/">
                <img src={LinkedinIcon} alt="linkedin logo"></img>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
