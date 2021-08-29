import React from "react";
import mobile_logo from "../icons/mobile_logo.svg";

const Navigation = () => (
  <header>
    <div className="navigation">
      <img src={mobile_logo} alt="image" className="navigation__image" />
      <div className="navigation__choice">
        <a href="#">
          <p>About</p>
        </a>
        <a href="#">
          <p>How it works</p>
        </a>
        <a href="#">
          <p>Contact</p>
        </a>
      </div>
    </div>
  </header>
);

export default Navigation;
