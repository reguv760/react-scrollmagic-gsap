import React from "react";
import ScrollMagic from "scrollmagic"; // Or use scrollmagic-with-ssr to avoid server rendering problems
import { TweenMax, TimelineMax } from "gsap"; // Also works with TweenLite and TimelineLite
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";

import Navigation from "./components/Navigation";
import HeroImage from "./components/HeroImage";
import Content from "./components/Content";
import Footer from "./components/Footer";

import "./styles/style.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.controller = new ScrollMagic.Controller();
  }

  componentDidMount() {
    ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

    let timeline = new TimelineMax();
    timeline
      .to("#sixth", 6, {
        y: -600
      })
      .to(
        "#fifth",
        6,
        {
          y: -500
        },
        "-=6"
      )
      .to(
        "#forth",
        6,
        {
          y: -400
        },
        "-=6"
      )
      .to(
        "#third",
        6,
        {
          y: -300
        },
        "-=6"
      )
      .to(
        "#second",
        6,
        {
          y: -200
        },
        "-=6"
      )
      .to(
        "#first",
        6,
        {
          y: -100
        },
        "-=6"
      )
      .to(
        ".content",
        6,
        {
          top: "0%"
        },
        "-=6"
      )
      .to(
        ".title, nav, .footer-wrapper",
        5,
        {
          y: -600,
          autoAlpha: 0
        },
        "-=6"
      )
      .from(
        ".one",
        3,
        {
          top: "40px",
          autoAlpha: 0
        },
        "-=4"
      )
      .from(
        ".two",
        3,
        {
          top: "40px",
          autoAlpha: 0
        },
        "-=3.5"
      )
      .from(
        ".three",
        3,
        {
          top: "40px",
          autoAlpha: 0
        },
        "-=3.5"
      )
      .from(
        ".four",
        3,
        {
          top: "40px",
          autoAlpha: 0
        },
        "-=3.5"
      )
      .from(
        ".text",
        3,
        {
          y: 60,
          autoAlpha: 0
        },
        "-=4"
      );
    new ScrollMagic.Scene({
      triggerElement: "section",
      duration: "200%", // scroll distance
      triggerHook: 0
    })
      .setTween(timeline)
      .setPin("section") // pins the element for the the scene's duration
      .addTo(this.controller); // assign the scene to the controller
  }

  render() {
    return (
      <div className='App'>
        <section>
          <Navigation />
          <HeroImage />
          <Content />
          <Footer />
        </section>
      </div>
    );
  }
}

export default App;
