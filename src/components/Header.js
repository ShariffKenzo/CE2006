import React from "react";
import Button from "./Button";
import { ReactDOM } from "react";
// link from react router dom
import { Link } from "react-router-dom";
import Home from "../Screens/Home";
import NearbyAmenities from "../Screens/NearbyAmenities";
import PricingTrends from "../Screens/PricingTrends";
import { useHistory } from 'react-router-dom';


const Header = () => {

  
  return (
    <header className="header">
      <h1 style={{ color: "black" }}>MyHomeFinder</h1>
      {/*  <Button color="black" text="$ Price Estimator"  />
      <Button color="black" text="Nearby Amenities" />
      <Button color="black" text="Pricing Trends" />
      <Button color="black" text="Distance" /> */}

      {/*
      <button className="menubutton" style={{ color: "black" }} onClick ={HomePage()} >$ Price Estimator</button>
      <button className="menubutton" style={{ color: "black" }} onClick ={NearbyAmenitiesPage()}>Nearby Amenities</button>
      <button className="menubutton" style={{ color: "black" }} onClick ={PricingTrendsPage()}>Pricing Trends</button>
      <button className="menubutton" style={{ color: "black" }} >Distance</button>
      */}

      {/* NOTE :style links as buttons not  button as links */}
      <Link className="newbuttons"  to = "/">Price Estimator</Link>
      <Link className="newbuttons" to = "/NearbyAmenities">Nearby Amenties</Link>
      <Link className="newbuttons"  to = "/PricingTrends">Pricing Trends</Link>


    </header>
  );
};

export default Header;
