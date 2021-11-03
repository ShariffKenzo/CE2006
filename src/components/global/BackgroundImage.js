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
    <div style={{ height: '70vh',  width:'100%',  position: 'absolute', left: '28%', top: '0%',
    transform: 'translate(-50%, -50%)' }}>
      <img src={logo} alt="Logo" />
    </div>
  );
};

export default BackgroundImage;
