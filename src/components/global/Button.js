import React from "react";
import {Link} from 'react-router-dom';

/**
 * Renders a button
 * @param { color, text } 
 * @returns a button component
 */
const Button = ({ color, text }) => {
  return (
    <button className="menubutton" style={{ color: color }} >
      {text}
    </button>
    

  );
};

export default Button;
