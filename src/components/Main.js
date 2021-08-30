import React from "react";
import background_image from "../images/image_summer.png";
import Newsletter from "./Newsletter";
import Navigation from "./Navigation";

const Main = () => (
  <div>
    <Navigation />
    <div
      className="background"
      style={{
        backgroundImage: `url(${background_image})`,
        backgroundRepeat: `no-repeat`,
      }}
    >
      <Newsletter />
    </div>
  </div>
);

export default Main;
