import React from "react";
import ReactDOM from "react-dom";
import "./styles/styles.scss";
import "normalize.css/normalize.css";
import Main from "./components/Main";
import Navigation from "./components/Navigation";

const Page = () => (
  <div className="page">
    <Navigation />
    <Main />
  </div>
);

ReactDOM.render(<Page />, document.getElementById("app"));
