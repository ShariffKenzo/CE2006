import React from "react";
import logo from "./HDBBackground.jpg";
import "../../App.css";
import Header from "./Header";
/**
 * Renders the website background image
 * @returns the background image for the website
 */
const BackgroundImage = () => {
  return (
    <div>
      <img src={logo} alt="Logo" />
    </div>
  );
};

export default BackgroundImage;
