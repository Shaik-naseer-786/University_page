import React from "react";
import "./Hero.css";
import dark_arow from '../../assets/dark-arrow.png'
const Hero = () => {
  return (
    <div className="hero container" id="hero">
      <div className="hero-text">
        <h1>We Ensure Better Education For a Better World.</h1>
        <p>
          At our university, we are dedicated to providing a transformative
          educational experience. Our innovative programs and distinguished
          faculty prepare students to excel in their chosen fields. Join us to
          become a part of a community that strives to create a brighter future
          for all.
        </p>
        <button className="btn">Explore More <img src={dark_arow} alt="" /></button>
      </div>
    </div>
  );
};

export default Hero;
