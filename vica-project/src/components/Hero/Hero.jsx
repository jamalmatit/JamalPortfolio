import React from "react";
import "./Hero.css";
import image3 from "../../assets/img/image3.png";
import imageface from "../../assets/img/imageface.png";
import imageinsta from "../../assets/img/imageinsta.png";
import imagelink from "../../assets/img/imagelink.png";
const Hero = () => {
  return (
    <div className="app">
      <main className="main-content">
        <div className="welcome-section">
          <h2 className="welcome-text">Welcome</h2>
          <h1 className="name-title">
            HEY! <span id="coo">I'm jamal,</span> <br />
            <span className="job-title" id="coo">
              Frontend Developer
            </span>
          </h1>
          <p className="description">
            I'm professional, a creative Product Designer. I've been helping
            businesses to solve their problems
          </p>
          <a href="/cv.pdf/cvv.jpg" download>
            <button className="download-btn">Download CV</button>
          </a>
        </div>
      </main>
      <div className="right">
        <img src={image3} alt="" />
      </div>
      <div className="follow-me-container">
        <span className="follow-text">Follow me on:</span>
        <div className="hr">
          <hr />
        </div>
        <div className="icons-container">
          <span className="icon">
            <img src={imageface} alt="" />
          </span>
          <span className="icon">
            <img src={imageinsta} alt="" />
          </span>
          <span className="icon">
            <img src={imagelink} alt="" />
          </span>
        </div>
      </div>
    </div>
  );
};
export default Hero;
