import React, { useState } from "react";
const validator = require("validator");
const Subscription = (props) => {
  const { setSubscribe } = props;
  const [email, setEmail] = useState("");
  const [checked, setChecked] = useState(true);

  const response = document.getElementById("response");
  const submitEmail = (e) => {
    e.preventDefault();
    if (email.length === 0) {
      response.innerHTML = "Email address is required";
    } else if (!validator.isEmail(email)) {
      response.innerHTML = "Please provide a valid e-mail address";
    } else if (email.endsWith("co")) {
      response.innerHTML =
        "We are not accepting subscriptions from Colombia emails";
    } else if (!checked) {
      response.innerHTML = "You must accept the terms and conditions";
    } else {
      setSubscribe(true);
      response.innerHTML = "";
    }
  };

  return (
    <div>
      <h1 className="newsletter__form--heading">Subscribe to newsletter</h1>
      <p className="newsletter__form--subheading">
        Subscribe to our newsletter and get 10% discount on pineapple glasses.
      </p>
      <form>
        <div className="newsletter__form--email" onSubmit={submitEmail}>
          <input
            className="newsletter__form--email-input"
            placeholder="Type your email address here…"
            type="text"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <button
            type="submit"
            className="newsletter__form--email-button"
            onClick={submitEmail}
          >
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
          <p id="response"></p>
        </div>
        <div className="newsletter__form--checkbox">
          <div className="newsletter__form--checkbox-choice">
            <input
              type="checkbox"
              id="terms"
              checked={checked}
              onChange={() => {
                setChecked(!checked);
              }}
            />
          </div>
          <label className="newsletter__form--checkbox-label">
            I agree to <span>terms of service</span>
          </label>
        </div>
      </form>
    </div>
  );
};

export default Subscription;
