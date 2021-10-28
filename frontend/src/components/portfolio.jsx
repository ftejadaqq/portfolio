import React, { Component } from "react";
import FeaturedApp from "./featuredApp";
import HackathonApp from "./hackathonApp";
import AllbirdsHomage from "./allbirdsHomage";
import ThePainterApp from "./thepainterApp";
import DesignFiles from "./designFiles";
import Johnogroats from "./johnogroats";

class Portfolio extends Component {
  render() {
    return (
      <section className="section-portfolio">
        <div className="portfolio-container content">
          <FeaturedApp />
          <HackathonApp />
          <AllbirdsHomage />
          <ThePainterApp />
          <DesignFiles />
          <Johnogroats />
        </div>
      </section>
    );
  }
}

export default Portfolio;
