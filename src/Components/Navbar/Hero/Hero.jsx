import React from "react";
import "./Hero.css";
import profile_img from "../../../assets/noe.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";
const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" />
      <h1>
        <span>I'm Noe Kieffer,</span> Frontend Developer based in Thailand
      </h1>
      <p>
        Passionate Front End Developer based in Thailand, currently honing my
        skills at Assumption University in Bangkok, pursuing a Bachelor's in
        Computer Science. Proficient in React, I thrive on creating captivating
        user interfaces that elevate web experiences.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
