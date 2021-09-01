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
          <svg
            width="24"
            height="14"
            viewBox="0 0 24 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.3"
              d="M17.7071 0.2929C17.3166 -0.0976334 16.6834 -0.0976334 16.2929 0.2929C15.9023 0.683403 15.9023 1.31658 16.2929 1.70708L20.5858 5.99999H1C0.447693 5.99999 0 6.44772 0 6.99999C0 7.55227 0.447693 7.99999 1 7.99999H20.5858L16.2929 12.2929C15.9023 12.6834 15.9023 13.3166 16.2929 13.7071C16.6834 14.0976 17.3166 14.0976 17.7071 13.7071L23.7071 7.70708C24.0977 7.31658 24.0977 6.6834 23.7071 6.2929L17.7071 0.2929Z"
              fill="#131821"
            />
          </svg>
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
