import React from "react";
import ReactDOM from "react-dom";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import Main from "./components/Main";
import Navigation from "./components/Navigation";
import Newsletter from "./components/Newsletter";

const Page = () => (
  <div>
    <Main />
    <Navigation />
    <Newsletter />
  </div>
);

ReactDOM.render(<Page />, document.getElementById("app"));
