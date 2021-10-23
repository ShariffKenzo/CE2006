import React from "react";
import {Link} from 'react-router-dom';

const Button = ({ color, text }) => {
  return (
    <button className="menubutton" style={{ color: color }} >
      {text}
    </button>
    

  );
};

export default Button;
