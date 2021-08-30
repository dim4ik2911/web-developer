import React from "react";
import ReactDOM from "react-dom";
import "./styles/styles.scss";
import "normalize.css/normalize.css";
import Main from "./components/Main";

const Page = () => (
  <div className="page">
    <Main />
  </div>
);

ReactDOM.render(<Page />, document.getElementById("app"));
