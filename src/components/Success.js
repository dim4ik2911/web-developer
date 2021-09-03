import React from "react";
import cup from "../icons/cup.svg";
const Success = () => (
  <div className="success">
    <img src={cup} alt="cup logo" className="success__cup" />
    <h1 className="newsletter__form--heading">Thanks for subscribing!</h1>
    <p className="newsletter__form--subheading success__cup--subheading">
      You have successfully subscribed to our email listing. Check your email
      for the discount code.
    </p>
  </div>
);

export default Success;
