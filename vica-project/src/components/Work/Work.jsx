import React from "react";
import "./Work.css";
import pro from "./../../assets/img/pro.png";
import ico from "./../../assets/img/ico.png";
const Work = () => {
  return (
    <div className="first">
      <div className="two">
        <div className="my">
          <p>portfolio</p>
          <h2>
            My Creative Works <br />
            Latest <span> Projects</span>
          </h2>
        </div>
        <button
          onClick={() => window.open("https://github.com/jamalmatit", "_blank")}
        >
          View Github
        </button>
      </div>
      <div className="iii">
        <div className="i">
          <img src={pro} alt="" />
          <p>Educational Platform</p>
          <div className="ii">
            <p>Html-Css3-Vanilla javscript</p>
            <img src={ico} alt="" />
          </div>
        </div>
        <div className="i">
          <img src={pro} alt="" />
          <p>Educational Platform</p>
          <div className="ii">
            <p>Html-Css3-Vanilla javscript</p>

            <img src={ico} alt="" />
          </div>
        </div>
        <div className="i">
          <img src={pro} alt="" />
          <p>Educational Platform</p>
          <div className="ii">
            <p>Html-Css3-Vanilla javscript</p>
            <img src={ico} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Work;
