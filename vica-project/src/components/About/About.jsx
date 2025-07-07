import React from "react";
import "./About.css";
import percent from "./../../assets/img/percent.png";
import circle from "./../../assets/img/circle.png";
import percent8 from "./../../assets/img/percent8.png";
const About = () => {
  return (
    <div className="about">
      <div className="imgs">
        <img src={circle} alt="" />
      </div>
      <div className="info">
        <h1 id="coo">About Me</h1>
        <p>
          i'm jamal a front-end developer.I study computer and <br />
          automation at Damascus university.
        </p>
        <div className="four">
          <div className="line">
            <div className="alo">
              <h2 id="coo">HTML5</h2>
              <img src={percent} alt="" />
            </div>

            <div className="blue">
              <div className="bluee"></div>
            </div>
          </div>
          <div className="line">
            <div className="aloo">
              <h2 id="coo">CSS3</h2>
              <img src={percent8} alt="" />
            </div>

            <div className="blue">
              <div className="bluee1"></div>
            </div>
          </div>
          <div className="line">
            <div className="alo3">
              <h2 id="coo">Javascript</h2>
              <img src={percent8} alt="" />
            </div>

            <div className="blue">
              <div className="bluee1"></div>
            </div>
          </div>
          <div className="line">
            <div className="alo4">
              <h2 id="coo">React</h2>
              <img src={percent} alt="" />
            </div>

            <div className="blue">
              <div className="bluee"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
