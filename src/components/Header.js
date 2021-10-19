import React from "react";
import Button from "./Button";
import { ReactDOM } from "react";

const Header = () => {
  return (
    <header className="header">
      <h1>HomeFinder</h1>
      <Button color="black" text="$ Price Estimator" />
      <Button color="black" text="Nearby Amenities" />
      <Button color="black" text="Pricing Trends" />
      <Button color="black" text="Hello" />
    </header>
  );
};

export default Header;
