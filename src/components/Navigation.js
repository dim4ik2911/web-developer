import React from "react";
import main_logo from "../icons/main_logo.svg";
import pineapple_logo from "../icons/pineapple_logo.svg";

const Navigation = () => (
  <header>
    <div className="navigation">
      <div className="navigation__logo">
        <img src={main_logo} alt="image" className="navigation__logo--image" />
        <img
          src={pineapple_logo}
          alt="image"
          className="navigation__logo--text"
        />
      </div>
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
