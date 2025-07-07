import React from "react";
import "./Footer.css";
import phone from "./../../assets/img/phone.png";
import mess from "./../../assets/img/mess.png";
import loc from "./../../assets/img/loc.png";
const Footer = () => {
  return (
    <div className="foot">
      <p>Contact</p>
      <h1>
        Let’s Discuss Your <span>Project</span>
      </h1>
      <div className="feet">
        <div className="lef">
          <div className="on">
            <img src={phone} alt="" />
            <div className="call">
              <p>Call me</p>
              <p>+963965601651</p>
            </div>
          </div>
          <div className="on">
            <img src={mess} alt="" />
            <div className="call">
              <p>Email me</p>
              <p>jamalmatit5@gmail.com</p>
            </div>
          </div>
          <div className="on">
            <img src={loc} alt="" />
            <div className="call">
              <p>Address</p>
              <p>Damascus,syria</p>
            </div>
          </div>
        </div>
        <div className="rig">
          <div className="tt">
            <input type="text" placeholder="Full name" />
            <input type="text" placeholder="Your email" />
          </div>
          <input type="text" placeholder="Phone number" />
          <input type="text" placeholder="Message" />
        </div>
      </div>
    </div>
  );
};
export default Footer;
