import React from "react";
import hhh from "./../../assets/img/hhh.png";
import arrow from "./../../assets/img/arrow.png";
import "./Edu.css";
const Edu = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="third" id="Edu">
      <p className="pp">Education and Experience</p>
      <h1 className="hh">Education & Experience</h1>
      <div className="jam">
        <div className="left">
          <img src={hhh} alt="" />
          <div className="div">
            <p className="exp" id="coo">
              English courses
            </p>
            <p className="ppp">
              I have taken English courses at Golden Milestone I have taken 7
              courses also I have taken conversation courses with great teachers
            </p>
            <p className="exp" id="coo">
              Front-end development
            </p>
            <p>I have taken a Web development course at Vica</p>
          </div>
        </div>
        <div className="rightt">
          <img src={hhh} alt="" />
          <div className="div">
            <p className="exp" id="coo">
              Computer Engineering
            </p>
            <p className="ppp">
              I study at Damascus university,In the second year I want to be
              specialized in every thing related to web development also I want
              to gain more experience in this failed
            </p>
            <p className="exp" id="coo">
              problem solving
            </p>
            <p>I have taken a problem course at cursera</p>
          </div>
        </div>
      </div>
      <div className="but">
        <button onClick={scrollToTop} className="jj">
          <img src={arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Edu;
