import React from "react";
import background_image from "../images/image_summer.png";
import Newsletter from "./Newsletter";

const Main = () => (
  <div
    className="background"
    style={{
      backgroundImage: `url(${background_image})`,
      backgroundRepeat: `no-repeat`,
    }}
  >
    <Newsletter />
  </div>
);

export default Main;
