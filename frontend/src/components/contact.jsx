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
          <p className="email">ftejadaq7@gmail.com</p>
          <div class="contact-container-icons">
            <div className="contact-container-icon">
              <img src={GithubIcon} alt="github logo"></img>
            </div>
            <div className="contact-container-icon">
              <img src={EmailIcon} alt="email logo"></img>
            </div>
            <div className="contact-container-icon">
              <img src={LinkedinIcon} alt="linkedin logo"></img>
            </div>
          </div>
        </div>
        {/* <div className="fixed-icons">
          <div className="github-fixed-icon">
            <img src={GithubFixedIcon} alt="github icon"></img>
          </div>
          <div className="send-fixed-icon">
            <img src={SendFixedIcon} alt="send email icon"></img>
          </div>
          <div className="linkedin-fixed-icon">
            <img src={LinkedinFixedIcon} alt="linkedin icon"></img>
          </div>
        </div> */}
      </section>
    );
  }
}

export default Contact;
