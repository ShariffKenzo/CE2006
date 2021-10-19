import React from "react";

const Button = ({ color, text }) => {
  return (
    <button className="menubutton" style={{ color: color }}>
      {text}
    </button>
  );
};

export default Button;
