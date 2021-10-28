import React, { Component } from "react";
import FeaturedApp from "./featuredApp";
import HackathonApp from "./hackathonApp";
import AllbirdsHomage from "./allbirdsHomage";
import ThePainterApp from "./thepainterApp";
import DesignFiles from "./designFiles";
import Johnogroats from "./johnogroats";

class Portfolio extends React.Component {
  render() {
    return (
      <section className="section-portfolio">
        <FeaturedApp />
        <HackathonApp />
        <AllbirdsHomage />
        <ThePainterApp />
        <DesignFiles />
        <Johnogroats />
      </section>
    );
  }
}

export default Portfolio;
