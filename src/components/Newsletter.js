import React from "react";
import facebook_icon from "../icons/facebook.svg";
import instagram_icon from "../icons/instagram.svg";
import twitter_icon from "../icons/twitter.svg";
import youtube_icon from "../icons/youtube.svg";
import arrow_icon from "../icons/arrow.svg";
const Newsletter = () => (
  <div className="newsletter">
    <div className="newsletter__form">
      <h1 className="newsletter__form--heading">Subscribe to newsletter</h1>
      <p className="newsletter__form--subheading">
        Subscribe to our newsletter and get 10% discount on pineapple glasses.
      </p>

      <div className="newsletter__form--email">
        <input
          className="newsletter__form--email-input"
          placeholder="Type your email address here…"
          type="email"
          name="email"
        />
        <button className="newsletter__form--email-button">
          <img src={arrow_icon} alt="arrow icon" />
        </button>
      </div>

      <div className="newsletter__form--checkbox">
        <div className="newsletter__form--checkbox-choice">
          <input
            type="checkbox"
            name="terms"
            placeholder="I agree to terms of service"
            className="newsletter__form--checkbox-choice-input"
            id="terms"
            checked="true"
          />
          <span className="newsletter__form--checkbox-choice-input-span"></span>
        </div>
        <label className="newsletter__form--checkbox-label" for="terms">
          I agree to <span>terms of service</span>
        </label>
      </div>
      <hr />
      <div className="newsletter__form--icons">
        <div className="newsletter__form--icons-structure">
          <a href="#">
            <img src={facebook_icon} alt="facebook icon" />
          </a>
          <a href="#">
            <img src={instagram_icon} alt="instagram icon" />
          </a>
          <a href="#">
            <img src={twitter_icon} alt="twitter icon" />
          </a>
          <a href="#">
            <img src={youtube_icon} alt="youtube icon" />
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Newsletter;
